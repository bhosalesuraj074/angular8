import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        let request = req.clone({
            setHeaders:{
                'X-RapidAPI-Key': '38d64a2a1bmshb4d4947595c94edp196e22jsncc07eac18ada',
                'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
            }
        })
        return next.handle(request);
    }
}