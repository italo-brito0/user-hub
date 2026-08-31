import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment.development';
import { User } from '../models/user.model';

@Injectable({
        providedIn: "root"
    })
export class UserService {

    private url = Environment.api

    constructor(private http: HttpClient) {}

    getUser() {
        return this.http.get<User[]>(this.url)      
    }
}
