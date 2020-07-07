import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppModule } from '_app/app.module'

import { UserNewComponent } from './user-new.component'

describe('UserNewComponent', () => {
  let component: UserNewComponent
  let fixture: ComponentFixture<UserNewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewComponent ],
      imports: [
        RouterTestingModule,
        AppModule
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
