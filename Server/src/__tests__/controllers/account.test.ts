import request from "supertest";
import { loginDto, registerDto } from "../../types";
import app from "../../app";

describe("account endpoints", () => {
  test("getAccount", async () => {
    const res = await request(globalThis.app)
      .get("/api/account")
      .set("Authorization", globalThis.token);
    
    // complete this
  });

  test("register", async () => {
    const user: registerDto = {
      username: "Shalom",
      password: "1234",
      phone: "0533907296",
    };
    const res = await request(globalThis.app)
      .post("/api/account/register")
      .send(user);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("message");
  });

  test("login", async () => {
    const data: loginDto = {
      username: "Shalom",
      password: "1234",
    };
    const res = await request(globalThis.app).post("/api/account").send(data);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.headers["authorization"]).toBe(`Bearer ${res.body.token}`);

    console.log("global token:  " + globalThis.token);
  });
});
