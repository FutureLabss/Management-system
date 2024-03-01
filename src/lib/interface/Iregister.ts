export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
}

export enum Role {
  User = "user",
  Admin = "admin",
  Manager = "manager",
  Employee = "employee",
}

export interface CreateUserModel {
  fullName: string;
  email: string;
  phoneNumber: number;
  department: string;
  gender: Gender;
  role: Role;
  avatarUrl?: string | null;
}

export interface UserModel extends CreateUserModel {
  id: string;
  status:string
  lastClockedIn:string
  lastClockedOut:string
}
