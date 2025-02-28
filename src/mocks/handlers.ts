import { http, HttpResponse } from "msw";
import { LoginRequest } from "../api/authApi";

export const handlers = [
  http.post<LoginRequest>("localhost:8080/auth/login", ({ params }) => {
    if (!params.username || !params.password)
      return new HttpResponse(null, { status: 401 });
  }),
];
