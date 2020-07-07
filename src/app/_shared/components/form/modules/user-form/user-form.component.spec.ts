import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { AppModule } from '_app/app.module'

import { UserFormComponent } from './user-form.component'

describe('UserFormComponent', () => {
  let component: UserFormComponent
  let fixture: ComponentFixture<UserFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        AppModule
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('form should invalid when from is empty', () => {
    expect(component.form.valid).toBeFalsy()
  })

  // user email test case
  it('user email validity', () => {
    let errors = {}
    let email = component.form.controls['user_email']
    expect(email.valid).toBeFalsy()

    // Set empty value
    email.setValue('')
    errors = email.errors || {}
    expect(errors['required']).toBeTruthy()

    // Set valid value
    email.setValue('joe@gmail.com')
    errors = email.errors || {}
    expect(errors['required']).toBeFalsy()

    // Set invalid value
    email.setValue('joe')
    errors = email.errors || {}
    expect(errors['pattern']).toBeTruthy()
  })

  // user fullname test case
  it('user fullname field validity', () => {
    let errors = {}
    let fullname = component.form.controls['user_fullname']
    expect(fullname.valid).toBeFalsy()

    // Set empty value
    fullname.setValue('')
    errors = fullname.errors || {}
    expect(errors['required']).toBeTruthy()

    // Set valid value
    fullname.setValue('Jhon Joe')
    errors = fullname.errors || {}
    expect(errors['required']).toBeFalsy()
  })

  // user address test case
  it('user address validity', () => {
    let errors = {}
    let address = component.form.controls['user_address']
    expect(address.valid).toBeFalsy()

    // Set empty value
    address.setValue('')
    errors = address.errors || {}
    expect(errors['required']).toBeTruthy()

    // Set valid value
    address.setValue('Cagayan de Oro')
    errors = address.errors || {}
    expect(errors['required']).toBeFalsy()
  })
})
