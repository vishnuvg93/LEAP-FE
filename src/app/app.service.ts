import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    public user: any = {
        name: "admin",
        password: "password"
    };

    constructor() {}
}