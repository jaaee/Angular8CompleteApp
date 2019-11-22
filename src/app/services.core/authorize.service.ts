
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICustomer, IUserAndRole } from "./../shared-artefacts/businessobjects.interfaces"

import { map, catchError } from 'rxjs/operators';



@Injectable()
export class UserAndRolesService {

    userAndRoleApiUrl = "https://localhost:5001/api/UserAndRoles/";
    
    //"http://localhost:4200/assets/jsonFiles/customer.json"

    constructor(private httpSocket: HttpClient) { }

    getAllUserAndRole() : Observable<IUserAndRole[]> {
        return this.httpSocket.get<IUserAndRole[]>(this.userAndRoleApiUrl).pipe(
            catchError(this.handleError)
        );
    }

    getRoleInfoForUser(userId : string): Observable<IUserAndRole> {
        return this.httpSocket.get<IUserAndRole>(this.userAndRoleApiUrl + userId.toString())
        .pipe(
            catchError(this.handleError)
        );
    }

   
    handleError(error: any) {
        console.log(error)
        return throwError(error)
    }

}