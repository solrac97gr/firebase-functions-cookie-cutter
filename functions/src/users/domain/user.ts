export class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  validate() {
    if (this.email.length <= 0) {
      throw new Error("The email is mandatory")
    }
    if (this.password.length <= 0) {
      throw new Error("The password is mandatory")
    }
  }
}
