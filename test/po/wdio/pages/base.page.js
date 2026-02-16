module.exports = class BasePage {
    
    open(path) {
        return browser.url('https://practicesoftwaretesting.com/');
    }

    get navSignIn() {
        return $('[data-test="nav-sign-in"]');
    }
};