import { UserApplication } from "../../domain/userApplication";
import * as functions from "firebase-functions";

export interface UserHandlers {
  application: UserApplication;
  Login(): functions.HttpsFunction;
  Register(): functions.HttpsFunction;
}

export class UserHandlersImpl implements UserHandlers {
  application: UserApplication;

  constructor(application: UserApplication) {
    this.application = application;
  }

  Login(): functions.HttpsFunction {
    throw new Error("Method not implemented.");
  }
  Register(): functions.HttpsFunction {
    throw new Error("Method not implemented.");
  }
}
