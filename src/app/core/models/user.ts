import { UserI } from "../interfaces/user-i";

export class User implements UserI {

  id!: number;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(obj?: Partial<User>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
