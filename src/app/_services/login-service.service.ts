import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  headers: any;
  constructor(private http: HttpClient) {
    
   }

   login(req: {}) : Observable<any> {
      return this.http.post(environment.baseUrl + "no-auth/login", req, {headers: this.headers});
   }

   getLoggedUserDetails() {
    return JSON.parse(String(localStorage.getItem("userDetail")))
   }

   hasToken() : boolean {
    return localStorage.getItem("token") != null
   }

   getToken() : any {
    return localStorage.getItem("token")
   }

   clearLocalStorage() : void {
    localStorage.clear();
   }

   storeUserDetails(user: any) {
    localStorage.setItem("token", user.token)
    localStorage.setItem("userDetail", JSON.stringify(user))
   }

   gtUserRoles(): Array<String> {
    let user = this.getLoggedUserDetails()
    return user.roles;
   }
}
