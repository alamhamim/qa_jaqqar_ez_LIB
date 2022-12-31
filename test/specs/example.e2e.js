const { Key } = require("webdriverio");
const { element } = require("../e2e/lib/element");
const NOPLogin = require("../e2e/lib/NOPLogin");
const NOPNavigate = require("../e2e/lib/NOPNavigate");

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await NOPLogin.login("admin@yourstore.com", "admin");
        await NOPNavigate.navigateTo("Catalog", "Categories");
        await browser.pause(5000);
    })
})



