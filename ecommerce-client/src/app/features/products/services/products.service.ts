// Products Service
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    constructor(private api: ApiService) { }
    // TODO: Implement CRUD operations
}
