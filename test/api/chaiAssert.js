const { expect } = require('chai')
const request =require('supertest')
const baseurl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request', () => {
    const response = request(baseurl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA) 
    
    it('response status = 200', async () => {
        //cek response status = 200
        expect((await response).status).to.equal(200)
    });
    
    it('response body to haveOwnProperty', async () => {
       //cek body response ada value 'message' 
       expect((await response).body).to.haveOwnProperty('message')
    });

    //reporting with mochawesome

});