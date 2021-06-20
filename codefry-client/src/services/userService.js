import http from "./httpService";
import { usersEndPoint } from "../config.json";


export function register(user) {
  return http.post(usersEndPoint + "/register", {
    name: user.name,
    email: user.email,
    CF_username: user.username,
    password: user.password,
  });
}