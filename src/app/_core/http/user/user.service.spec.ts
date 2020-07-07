import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpResponse } from '@angular/common/http'

import { UserService } from './user.service'
import { User } from '_shared/models/user/user.model'

const prefix = 'users'

const dummyUsers: User[] = [
  {
    '_id': '1',
    'user_fullname': 'Jhon Joe',
    'user_email': 'joe@gmail.com',
    'user_address': 'Cagayan de Oro',
    'updated_at': new Date()
  }
]

describe('UserService', () => {
  let service: UserService
  let httpMock: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
      ]
    })
    
    service = TestBed.inject(UserService)
    httpClient = TestBed.inject(HttpClient)
    httpMock = TestBed.get(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  
  it(`should fetch users`, () => {
    service.getUsers()
      .subscribe((users: User[]) => {
        expect(users.length).toBe(1)
      })
    
    let req = httpMock.expectOne(`${prefix}`)
    expect(req.request.method).toBe('GET')

    req.flush(dummyUsers)
    httpMock.verify
  })

  it(`should get user info`, () => {
    const id: string = '1'

    service.getUser(id)
      .subscribe((users: User[]) => {
        expect(users.length).toBe(1)
        expect(users).toEqual(dummyUsers)
      })

    const req = httpMock.expectOne(`${prefix}/1`)
    expect(req.request.method).toBe('GET')

    req.flush(dummyUsers)
    httpMock.verify()
  })

  it(`should add new user`, () => {
    const newUser: User = { 
      'user_fullname': 'Jhon Joe',
      'user_email': 'joe@gmail.com',
      'user_address': 'Cagayan de Oro',
      'updated_at': new Date()
    }

    service.addUser(newUser)
      .subscribe(
        data => expect(data).toEqual(newUser, 'should return user'),
        fail
      )

      const req = httpMock.expectOne(`${prefix}`)
      expect(req.request.method).toBe('POST')

      expect(req.request.body).toEqual(newUser)

      const expectedResponse = new HttpResponse({ status: 200, statusText: 'User Created', body: newUser })
      req.event(expectedResponse)
  })

  it(`should update user`, () => {
    
    const form: User = {
      '_id': '1',
      'user_fullname': 'Jhon Vic Joe',
      'user_email': 'joe@gmail.com',
      'user_address': 'Cagayan de Oro',
      'updated_at': new Date()
    }

    service.updateUser(form)
      .subscribe(
        data => expect(data).toEqual(form, 'should return user'),
        fail
      )

      const req = httpMock.expectOne(`${prefix}/${form._id}`)
      expect(req.request.method).toBe('PUT')

      expect(req.request.body).toEqual(form)

      const expectedResponse = new HttpResponse({ status: 200, statusText: 'User Updated', body: form })
      req.event(expectedResponse)
  })

  it(`should delete user`, () => {
    
    const form: User = {
      '_id': '1',
      'user_fullname': 'Jhon Vic Joe',
      'user_email': 'joe@gmail.com',
      'user_address': 'Cagayan de Oro',
    }

    service.deleteUser(form)
      .subscribe((users: User[]) => {
      })

      const req = httpMock.expectOne(`${prefix}/${form._id}`)
      expect(req.request.method).toBe('DELETE')

      const expectedResponse = new HttpResponse({ status: 200, statusText: 'User Deleted', body: form })
      req.event(expectedResponse)
  })
})
