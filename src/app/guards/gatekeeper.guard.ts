import { Injectable } from '@angular/core';

import { CanActivate,ActivatedRoute,Router} from '@angular/router';

@Injectable({
    providedIn:"root"
})



export class GateKeeperGaurd implements CanActivate{

    isAuthenticated = false;
    constructor(private route : Router){}

    canActivate(){
        let userId=localStorage.getItem("userId")
        if(userId){
            this.isAuthenticated = true;
        }
        else{
           this.route.navigateByUrl("/login")

        }
        return this.isAuthenticated;
    }
}