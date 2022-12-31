var driver = require("@ez-library/wdio");
const NOPNavigate = require("../../e2e/lib/NOPNavigate");

describe("Test EZ Library", function(){

    it("Test EZ Library: Testing goTo(), byId, element(), selectDDFeildByCss_BYINDEX():::", async function(){
        await driver.goTo("https://admin-demo.nopcommerce.com/login");
        await driver.byId("Email").setValue("admin@yourstore.com");
        await driver.byId("Password").setValue("admin");
        await driver.element("button[type='submit']").click();
        await NOPNavigate.navigateTo("Catalog", "Products");
        await driver.selectDDFeildByCss_BYINDEX("select[id='SearchCategoryId']", 1);
        await browser.pause(5000);
    })

    it("Test EZ Library: Testing selectDDFeildByCss_BYTEXT():::", async function(){
        await driver.goTo("https://admin-demo.nopcommerce.com/login");
        await driver.byId("Email").setValue("admin@yourstore.com");
        await driver.byId("Password").setValue("admin");
        await driver.element("button[type='submit']").click();
        await NOPNavigate.navigateTo("Catalog", "Products");
        await driver.selectDDFieldByCss_BYTEXT("select[id='SearchCategoryId']", "Books");
        await browser.pause(5000);
    })
})