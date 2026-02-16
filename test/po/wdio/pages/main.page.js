const BasePage = require('./base.page');

class MainPage extends BasePage {
    open() {
        return super.open('');
    }
    
    get handSawFilter() {
        return $('label=Hand Saw');
    }
    
    getProductCard(name) {
        return $(`.card-title=${name}`);
    }

    async filterByHandSaw() {
        await this.handSawFilter.waitForDisplayed();
        await this.handSawFilter.click();
    }

}
module.exports = new MainPage();