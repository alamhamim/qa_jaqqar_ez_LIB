
const { element } = require('./element');
var wait = require('./wait');
var NOPNavigate = function(){

    this.navigateTo = async function(sMenu, sSubMenu){
        await wait.waitForElement("//nav/ul[@role='menu']/li/a/p[contains(text(), '"+sMenu+"')]");
        await (await $("//nav/ul[@role='menu']/li/a/p[contains(text(), '"+sMenu+"')]")).click().then(async function(){
            await (await element("//nav/ul[@role='menu']/li/a/p[contains(text(), '"+sMenu+"')]//ancestor::a//following-sibling::ul/li/a//p[contains(text(),'"+sSubMenu+"')]")).waitForDisplayed(40000).then(async function(isDisplayed){
                if(!isDisplayed){
                    throw new Error("Sub menu is not found!!! are you sure you have entered the correct menu and sub menu?");
                }

                await (await element("//nav/ul[@role='menu']/li/a/p[contains(text(), '"+sMenu+"')]//ancestor::a//following-sibling::ul/li/a//p[contains(text(),'"+sSubMenu+"')]")).click();
            })
        })
    }
}


module.exports = new NOPNavigate();