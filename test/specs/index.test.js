const MainPage = require('../po/wdio/pages/main.page');
const LoginPage = require('../po/wdio/pages/login.page');
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe("Examples of chai interfaces", () => {

    beforeEach(async () => { 
        await MainPage.open();
        await browser.maximizeWindow();
    })

    it("Wrong password log in", async () => {
        await MainPage.navSignIn.click();

        await LoginPage.login('customer@practicesoftwaretesting.com', 'wrong_password');

        await LoginPage.errorMessage.waitForDisplayed({ timeout: 3000 }); 
        const errorText = await LoginPage.errorMessage.getText();
        assert.include(errorText, "Invalid email or password");
    });

    it("Log in with valid credentials", async () => {
        await MainPage.navSignIn.click();
        await LoginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

        await browser.waitUntil(async () => {
            return (await browser.getTitle()).includes('Overview');
        }, { timeout: 3000 });

        expect(await browser.getTitle()).to.equal('Overview - Practice Software Testing - Toolshop - v5.0');
    });

    it("Filter the Hand Saw", async () => {        
        await MainPage.filterByHandSaw();
        const product = MainPage.getProductCard('Wood Saw');
        
        await product.waitForExist({ timeout: 3000 });
        expect(await product.isExisting()).to.be.true;
    });

});