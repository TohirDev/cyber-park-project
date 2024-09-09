import request from "./utils/axios";

export class Api {
  static fetchUsers() {
    return () => request({ url: "users" });
  }
}
