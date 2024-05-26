import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  admin(uname: string, pword: string){
    if (uname ==='ami' && pword === '123'){
      return 200;
    }
    else {
      return 404;
    }
  }
}