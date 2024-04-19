import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cred: Map<string, string>;
 
 
  constructor( ) { this.cred = new Map<string, string>([
    ['LAKSHMI', 'LAK'],
    ['PAVITRA', 'PAV'],
    ['PRIYA', 'PRI'],
    ['MANJIRI', 'MAN'],
    ['RAHUL', 'RAH']
  ])
  }
 
  checkCredentials(Username: string,Pword: string){
   
 
    if (this.cred.has(Username)) {
      if (this.cred.get(Username) === (Pword)){
          return 200;
          }
      else{
        return 404;
      }
  }
  else {
    return 404;
      }
 
}
}
 
 
 
 