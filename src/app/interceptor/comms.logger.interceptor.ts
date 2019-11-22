import {Injectable} from '@angular/core';

import { HttpRequest,HttpEvent,HttpInterceptor,HttpHandler,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommsLoggerInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{

        //let newRequest = req.clone();

        let newRequest = req.clone({
            headers:req.headers.set("myHeader","Custom Value")
        });
       
        //append("myHeader","Custom Value")

        console.log(newRequest)

        return next.handle(newRequest)

    }

}