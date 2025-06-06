import { Injectable } from '@angular/core';

type Role = 'user' | 'admin' | null;

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: User | null = null;

  constructor() {
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;
  }

  login(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  loginWithSampleUser(): void {
    const sampleUser: User = {
      id: 1,
      name: 'Sample User',
      email: 'user@test.com',
      role: 'user' // or 'admin'
    };
    this.login(sampleUser);
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  getUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  hasRole(role: Role): boolean {
    return this.user?.role === role;
  }
}
