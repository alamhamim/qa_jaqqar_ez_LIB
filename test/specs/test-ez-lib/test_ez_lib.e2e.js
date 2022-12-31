var driver = require("@ez-library/wdio");

describe("Test EZ Library", function(){

    it("Test 1", async function(){
        await driver.goTo("https://admin-demo.nopcommerce.com/login");
        await (await driver.element("input[id='Email']")).setValue("admin@yourstore.com");
        await (await driver.element("input[id='Password']")).setValue("admin");
        await (await driver.element("button[type='submit']")).click();
    })
})