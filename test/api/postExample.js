const request = require('supertest')
const baseurl = require('../../env')

describe('POST request', () => {
    it('Success Create User', async () => {
        const response = request(baseurl())
        .post('/user')
        .send({
            "id": 123,
            "username": "hanakamila",
            "firstName": "hana",
            "lastName": "kamila",
            "email": "examplemail@mail.com",
            "password": "123456",
            "phone": "081212121",
            "userStatus": 1
          })
          console.log((await response).status)
          console.log((await response).body)
    });
});