import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppModule } from '_app/app.module'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterTestingModule,
        FontAwesomeModule,
        AppModule
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
