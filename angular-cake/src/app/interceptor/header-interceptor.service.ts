import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        let request = req.clone({
            setHeaders:{
                'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
                'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
            }
        })
        return next.handle(request);
    }
}