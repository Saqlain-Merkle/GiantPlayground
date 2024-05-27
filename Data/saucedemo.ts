
import {WebDriver, By, WebElement, until} from "selenium-webdriver";

export const sauce = {

    url: {
        loginPage: 'https://www.saucedemo.com',
    },

    elements: {
        userName: {id: 'user-name'},
        password: {id: 'password'},
        loginButton: {id: 'login-button'},
        searchText: {id: 'body'},

    },

    async open(driver : WebDriver){
        await driver.get(this.url.loginPage);

    },

    async enterUsername(driver:WebDriver,username: string){
        const userNameElement = await driver.findElement(By.id(this.elements.userName.id));
        await userNameElement.sendKeys(username);
    },
    async enterPassword(driver: WebDriver, password: string) {
        const passwordElement = await driver.findElement(By.id(this.elements.password.id));
        await passwordElement.sendKeys(password);
    },
    async submitLogin(driver: WebDriver) {
        const loginButtonElement = await driver.findElement(By.id(this.elements.loginButton.id));
        await loginButtonElement.click();
    },

}