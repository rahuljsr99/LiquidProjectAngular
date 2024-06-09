import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://localhost:7177/api/Users'; 
 
  constructor(private http: HttpClient) { }

  checkCredentials(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { Username: username, Password: password };
    return this.http.post(`${this.apiUrl}/Authenticate`, body, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    throw error;
  }
}













// export class AuthService {
//   cred: Map<string, string>;
 
 
//   constructor( ) { this.cred = new Map<string, string>([
//     ['LAKSHMI', 'LAK'],
//     ['PAVITRA', 'PAV'],
//     ['PRIYA', 'PRI'],
//     ['MANJIRI', 'MAN'],
//     ['RAHUL', 'RAH']
//   ])
//   }
 
//   checkCredentials(Username: string,Pword: string){
   
 
//     if (this.cred.has(Username)) {
//       if (this.cred.get(Username) === (Pword)){
//           return 200;
//           }
//       else{
//         return 404;
//       }
//   }
//   else {
//     return 404;
//       }
 
// }
// }
 
 
 
 