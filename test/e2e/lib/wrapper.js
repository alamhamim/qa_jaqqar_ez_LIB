var wait = require("./wait.js") 

var wrapper = function(){

    this.get = function(url){
        browser.url(url);
    }

    this.clickOnElement = function(element){
       wait.waitForElement(element).click();
    }

    this.enterText = function(element, text){
        wait.waitForElement(element).setValue(text);
    }

}

