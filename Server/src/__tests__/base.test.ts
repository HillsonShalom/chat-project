import request from "supertest"
import app from "../app"
import { connection, UserCollection } from "../DAL"
import mongoose from "mongoose"
import { IUser } from "../types"

beforeAll(async () => {
    await connection()
})

describe('some http', () => {
    test('hello world', async () => {
        const res = await request(app.app).post('/api/account/register');
        expect(res.status).toBe(200);
        expect(res.text).toBe('hello')
    })

    test('create user', async () => {
        const model: IUser = {username: "Hillson", password: "1234", phone: "0533907296", contacts: [], }
        const newUser = new UserCollection(model)
        const user = await newUser.save()
        const foundUser = await UserCollection.findById(user.id)
        expect(user.id as string).toBe(foundUser!.id as string)
    })
})

afterAll(async () => {
    await mongoose.connection.db!.dropDatabase()
    await mongoose.disconnect()
    app.server.close()
})