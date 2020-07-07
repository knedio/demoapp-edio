import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from '_app/_shared/models/user/user.model'
import { UserService } from '_app/_core/http/user/user.service'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  id: string
  user: User

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.onGetUser()
  }

  onGetUser(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.userService.getUser(this.id)
        .subscribe((user: User) => {
          this.user = user
        }, err => {
          console.log(err)
        })
    }
  }

}
