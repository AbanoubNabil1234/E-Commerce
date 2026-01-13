import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../services/language.service';

/**
 * HTTP Interceptor that adds Accept-Language header to all requests.
 * This enables the backend to return localized content.
 */
@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

    constructor(private languageService: LanguageService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // Clone the request and add Accept-Language header
        const localizedRequest = request.clone({
            setHeaders: {
                'Accept-Language': this.languageService.currentLanguage
            }
        });

        return next.handle(localizedRequest);
    }
}
