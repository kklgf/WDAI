export interface User {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
}

export enum UserRole {
  ADMIN = 'admin'
}
