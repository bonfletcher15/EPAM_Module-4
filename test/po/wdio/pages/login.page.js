const BasePage = require('./base.page');

class LoginPage extends BasePage {
    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('.btnSubmit');
    }
    
    get errorMessage() {
        return $('.help-block');
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}
module.exports = new LoginPage();