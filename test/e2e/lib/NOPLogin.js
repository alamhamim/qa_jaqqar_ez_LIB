var driver = require('@ez-library/wdio');
const wait = require('./wait');
var NOPLogin = function () {
    this.login = async function (userName, passWord) {
        await browser.url("https://admin-demo.nopcommerce.com/login");
        await driver.byId("Email").setValue(userName);
        await driver.byId("Password").setValue(passWord);
        await wait.waitForElement("button[type='submit']");
        await $("button[type='submit']").click();
    }
}

module.exports = new NOPLogin();