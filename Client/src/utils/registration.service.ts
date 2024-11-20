import { loginDto, registerDto } from "../types/outgoing.dtos";

const baseUrl = "http://localhost:7000/api/account/";

export const registerService = async (
  dto: registerDto
): Promise<[boolean, string]> => {
  try {
    const res = await fetch(baseUrl + "register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
    if (res.status != 201)
      throw new Error(`Error! the status code is ${res.status}`);
    return [true, ""];
  } catch (err) {
    return [false, (err as Error).message];
  }
};

export const loginService = async (dto: loginDto) => {
  try {
    const res = await fetch(baseUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
    if (res.status != 200)
      throw new Error(`Error! the status code is ${res.status}`);
    const body = (await res.json()) as { token: string };
    console.log(body.token);
    localStorage.setItem("Authorization", body.token);
    return [true, ""];
  } catch (err) {
    return [false, (err as Error).message];
  }
};
