const BasePage = require('./base.page');

class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.handSawFilter = page.getByLabel('Hand Saw');
    }

    getProductCard(name) {
        return this.page.locator('.card', { hasText: name });
    }

    async filterByHandSaw() {
        await this.handSawFilter.check();
    }
}
module.exports = MainPage;