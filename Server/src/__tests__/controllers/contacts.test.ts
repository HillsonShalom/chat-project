import request from 'supertest'

describe('contacts', () => {
    it('add contact', async () => {
        const friend1 = await request(globalThis.app).post('/api/account/register').send({username: 'aaa', password: 'aaa', phone: '111'})
        const friend2 = await request(globalThis.app).post('/api/account/register').send({username: 'bbb', password: 'bbb', phone: '222'})

        // const res 
    })
})