class BasePage {
    constructor(page) {
        this.page = page;
        this.navSignIn = page.locator('[data-test="nav-sign-in"]');
    }

    async open(path = '') {
        await this.page.goto(`https://practicesoftwaretesting.com/${path}`);
    }
}
module.exports = BasePage;