const { test: base } = require('@playwright/test');
const MainPage = require('./pages/main.page');
const LoginPage = require('./pages/login.page');

exports.test = base.extend({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.open(); 
        await use(mainPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

exports.expect = base.expect;