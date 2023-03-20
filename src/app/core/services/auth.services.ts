import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token!: string;

  login(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
