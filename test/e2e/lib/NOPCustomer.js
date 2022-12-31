const { element } = require('./element');
const wait = require('./wait');
var NOPCustomer = function(){

    this.addNew = $("//body/div[3]/div[1]/form[1]/div[1]/div[1]/a[1]");

    this.addCustomer = async function(email, pass, firstName, lastName, gender, dob, companyName, isTaxExempt, customerRoles, managerOfVendor, active, adminComment){
        await wait.waitForElement(this.addNew);
        await this.addNew.click().then(async function(){
            await wait.waitForElement("//h1[contains(text(),'Add a new customer')]");
        });
        await (await element("//input[@id='Email']")).setValue(email);
        await (await element("//input[@id='Password']")).setValue(pass);
        await (await element("//input[@id='FirstName']")).setValue(firstName);
        await (await element("//input[@id='LastName']")).setValue(lastName);
        if(gender == ("Male")){
            await (await element("//label[contains(text(),'Male')]")).click();
        }
        if(gender == ("Female")){
            await (await element("//label[contains(text(),'Female')]")).click();
        }
        await (await element("//input[@id='DateOfBirth']")).setValue(dob);
        await (await element("//input[@id='Company']")).setValue(companyName);
        if(isTaxExempt == ("Yes")){
            await (await element("//label[contains(text(),'Yes')]")).click();
        }
        
        
        
    }

}
module.exports = new NOPCustomer();