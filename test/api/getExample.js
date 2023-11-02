    const request = require('supertest') 
    const baseurl = require('../../env')

    describe("Get request", () => {
        it('Get Inventory',async() => {
            const response = request(baseurl())
            .get('/store/inventory')
            console.log((await response).status)
            console.log((await response).body)
        })
    })
