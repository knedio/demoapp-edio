import { Injectable } from '@angular/core'
import { User } from '_shared/models/user/user.model'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators'

const prefix = 'users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]
  user: User

    constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<User[]>(`${prefix}`)
      .pipe(
        tap( data => {
          this.users = data
        })
      )
  }

  getUser(id: string): Observable<any> {
    return this.http.get<User>(`${prefix}/${id}`)
      .pipe(
        tap( data => {
          this.user = data
        })
      )
  }

  addUser(data: User): Observable<any> {
    return this.http.post<User>(`${prefix}`, data)
      .pipe(
        tap( data => {
          this.user = data
        })
      )
  }

  updateUser(data: User): Observable<any> {
    return this.http.put<User>(`${prefix}/${data._id}`, data)
      .pipe(
        tap( data => {
          this.user = data
        })
      )
  }

  deleteUser(data: User): Observable<any> {
    return this.http.delete<User>(`${prefix}/${data._id}`)
      .pipe(
        tap( data => {
          this.user = data
        })
      )
  }
}
