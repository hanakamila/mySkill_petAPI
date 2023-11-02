const assert = require("chai").assert;
const app =require('../../assert')

describe("welcome test", function(){
    it('app should return welcome message',function(){
        assert.equal(app(),'Welcome to QA course at MySkill')
    })
})