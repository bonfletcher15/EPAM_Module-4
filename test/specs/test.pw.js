const { test, expect } = require('../po/playwright/fixtures');

test.describe("Toolshop Playwright POM Tests with Fixtures", () => {

    test("Wrong password log in", async ({ mainPage, loginPage }) => {
        await mainPage.navSignIn.click();
        await loginPage.login('customer@practicesoftwaretesting.com', 'wrong_password');
        
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText("Invalid email or password");
    });

    test("Log in with valid credentials", async ({ page, mainPage, loginPage }) => {
        await mainPage.navSignIn.click();
        await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

        await expect(page).toHaveURL(/.*account/); 
    });

    test("Filter the Hand Saw", async ({ mainPage }) => {
        await mainPage.filterByHandSaw();
        const product = mainPage.getProductCard('Wood Saw');
        await expect(product).toBeVisible();
    });
});