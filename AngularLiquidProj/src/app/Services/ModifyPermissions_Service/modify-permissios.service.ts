import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ModifyPermissionsRequestModel {
  currentUserId: string;
  changeRequestUserId: string;
  permissionChangeRequestType: string;
  permissionChangeRequestValue: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModifyPermissiosService {

  private apiUrl = 'https://localhost:7177/api/Users/ModifyPermissions';

  constructor(private http: HttpClient) { }

  modifyPermissions(request: ModifyPermissionsRequestModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
}
}
