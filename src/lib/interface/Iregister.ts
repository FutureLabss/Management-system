import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  phoneNumber: string;
  department: string;
  gender: Gender;
  role: Role;
  avatarUrl?: string;
}

export interface UserModel extends CreateUserModel {
  id: string;
  status:boolean;
  lastClockedIn:string
  lastClockedOut:string
}

export interface DashBoardUser extends UserModel{
}