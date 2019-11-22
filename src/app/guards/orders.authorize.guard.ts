import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { UserAndRolesService } from "./../services.core/authorize.service";
import { IUserAndRole } from '../shared-artefacts/businessobjects.interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})



export class OrdersAuthorizeGaurd implements CanActivate {

    isOk: boolean = false;
    userInfo;
    constructor(private authService: UserAndRolesService) { }

    canActivate() {
        let userId = localStorage.getItem("userId")
        return Observable.create((observer) => {
            this.authService.getRoleInfoForUser(userId).subscribe((info: IUserAndRole) => {
                
                this.userInfo = info;
                console.log(info)
                if (this.userInfo.userRole == 'manager') {
                    this.isOk = true;
                } else {
                    this.isOk = false;
                }
                observer.next(this.isOk);
                observer.complete();
            })
        });
    }
}