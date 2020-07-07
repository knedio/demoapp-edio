import { Component, OnInit, ViewChild } from '@angular/core'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { User } from '_shared/models/user/user.model'
import { UserService } from '_core/http/user/user.service'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2'
import { ColumnMode } from '@swimlane/ngx-datatable'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent
  @ViewChild('processingSwal') private processingSwal: SwalComponent

  faPen = faPen
  faTrash = faTrash
  users: User[]
  isLoading: boolean = true
  ColumnMode = ColumnMode


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.onFetchUsers()
  }

  onFetchUsers(): void {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users
        this.isLoading = false
      }, err => {
        this.isLoading = false
        console.log(err)
      })
  }

  onDeleteUser(data: User): void {
    this.userService.deleteUser(data)
      .subscribe((users: User[]) => {
        this.users = this.users.filter(user => user._id !== data._id)

        this.processingSwal.title = 'Successful!'
        this.processingSwal.text = 'Deleting the user.'
        this.processingSwal.icon = 'success'
        this.processingSwal.allowOutsideClick = true
        this.processingSwal.showConfirmButton = true

        this.processingSwal.fire()
      }, err => {
        this.processingSwal.title = 'Warning!'
        this.processingSwal.text = 'Something went wrong! Please again.'
        this.processingSwal.allowOutsideClick = true
        this.processingSwal.showConfirmButton = true

        this.processingSwal.fire()
      })
  }

}
