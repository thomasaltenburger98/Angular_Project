import { Injectable } from '@angular/core';

type Role = 'user' | 'admin' | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: Role = 'admin'; // Für Test: 'admin' oder 'user'

  getRole(): Role {
    return this.role;
  }

  setRole(newRole: Role) {
    this.role = newRole;
  }


  constructor() { }
}
