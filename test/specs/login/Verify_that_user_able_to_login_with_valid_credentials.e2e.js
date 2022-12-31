const { element } = require("../../e2e/lib/element");
const NOPLogin = require("../../e2e/lib/NOPLogin")

describe("Verify_that_user_able_to_login_with_valid_credentials", function(){


    it("Verify_that_user_able_to_login_with_valid_credentials_1: with valid username and password",async function(){
        await NOPLogin.login("admin@yourstore.com", "admin");
        //await expect((await (await element("div[id='navbarText']>ul>li:nth-child(3)>a")).getText()).toString()).toContain("Logout");
        await (await element("div[id='navbarText']>ul>li:nth-child(3)>a")).click();
    })

    it("Verify_that_user_able_to_login_with_valid_credentials_2: with invalid username and password",async function(){
        await NOPLogin.login("admin@yourstore.com", "something else");
        await (await element("div[id='navbarText']>ul>li:nth-child(3)>a")).isDisplayed().then(function(isDisplayed){
            expect(isDisplayed).toBe(false);
        })
    })

    it("Verify_that_user_able_to_login_with_valid_credentials_3: verify login with invalid username and valid pass", async function(){
        await NOPLogin.login("admin@test.com", "admin");
        await (await element("div[id='navbarText']>ul>li:nth-child(3)>a")).isDisplayed().then(function(isDisplayed){
            expect(isDisplayed).toBe(false);
        })
    })

    it("Verify_that_user_able_to_login_with_valid_credentials_4: verify login with both valid and ivanlid pass", async function(){
        await NOPLogin.login("admin@test.com", "invalidpass");
        await (await element("div[id='navbarText']>ul>li:nth-child(3)>a")).isDisplayed().then(function(isDisplayed){
            expect(isDisplayed).toBe(false);
        })
    })
    

})