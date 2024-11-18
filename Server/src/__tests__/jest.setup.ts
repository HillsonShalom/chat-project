import app from "../app";
import request from "supertest";
import express from "express";
import { connection } from "../DAL";
import mongoose from "mongoose";
import { loginDto, registerDto } from "../types";

declare global {
  var token: string;
  var app: express.Application;
}

beforeAll(async () => {
  await connection();
  globalThis.app = app.app;

  const user: registerDto = {
    username: "Tester",
    password: "1a2b3c4d",
    phone: "0123456789",
  };
  const register = await request(globalThis.app)
    .post("/api/account/register")
    .send(user);

  const data: loginDto = {
    username: "Tester",
    password: "1a2b3c4d",
  };
  const login = await request(globalThis.app).post("/api/account").send(data);

  globalThis.token = login.headers["authorization"]
});

afterAll(async () => {
  await mongoose.connection.db!.dropDatabase();
  await mongoose.disconnect();
  app.server.close();
});
