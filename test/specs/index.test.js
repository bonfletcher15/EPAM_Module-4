const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe("Examples of chai interfaces", () => {

    it("Assert", async () => {
        await browser.url("https://www.epam.com/");
        const title = await browser.getTitle();
        assert.equal(title, "EPAM | Software Engineering & Product Development Services");
    });

    it("Expect", async () => {
        await browser.url("https://www.epam.com/");
        const title = await browser.getTitle();
        expect(title).to.equal("EPAM | Software Engineering & Product Development Services");
    });

    it("Should", async () => {
        await browser.url("https://www.epam.com/");
        const title = await browser.getTitle();
        title.should.equal("EPAM | Software Engineering & Product Development Services");
    })

});