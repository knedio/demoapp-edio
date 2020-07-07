import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { User } from '_app/_shared/models/user/user.model'
import { UserService } from '_app/_core/http/user/user.service'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @ViewChild('processingSwal') private processingSwal: SwalComponent
  @Input() data: User

  errorMessage: string
  form: FormGroup
  submitted: Boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.onSetValidation()
    this.onSetData()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onSetData()
  }

  get f() {
    return this.form.controls
  }
  
  onSetValidation(): void {
    this.form = this.formBuilder.group(
      {
        user_email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        user_fullname: ['', [Validators.required]],
        user_address: ['', [Validators.required]],
      },
    )
  }

  onSetData(): void {
    if (this.data) {
      Object.keys(this.form.value).map(key => {
        this.form.controls[key].setValue(this.data[key])
      })
    }
  }

  onSubmit(): void {
    this.submitted = true
    this.errorMessage = ''
    if ( !this.form.invalid ) {
      this.processingSwal.fire()

      const { url, params } = this.data?._id
        ?
          {
            url: 'updateUser',
            params: {
              _id: this.data._id,
              ...this.form.value
            }
          }
        :
          {
            url: 'addUser',
            params: this.form.value
          }
  
      this.userService[url](params)
        .subscribe((user: User) => {
          this.onRequest('success')
        }, err => {
          this.onRequest('error')
          console.log(err)
        })
    }
  }

  onRequest(action: string): void {
    this.processingSwal.dismiss()
    
    if (action == 'success') {
      this.processingSwal.title = 'Successful!'
      this.processingSwal.text = 'Pleasw wait. Redirect ...'
      this.processingSwal.icon = 'success'

      this.processingSwal.fire()

      setTimeout(() => {
        this.router.navigate(['/'], {
          queryParams: {}
        })
      }, 1000)
    } else {
      this.processingSwal.title = 'Warning!'
      this.processingSwal.text = 'Something went wrong! Please again.'
      this.processingSwal.allowOutsideClick = true
      this.processingSwal.showConfirmButton = true

      this.processingSwal.fire()
    }
  }

}
