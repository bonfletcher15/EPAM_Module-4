const BasePage = require('./base.page');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.btnSubmit = page.locator('.btnSubmit');
        this.errorMessage = page.locator('.help-block');
    }

    async login(email, password) {
        await this.inputEmail.fill(email);
        await this.inputPassword.fill(password);
        await this.btnSubmit.click();
    }
}
module.exports = LoginPage;