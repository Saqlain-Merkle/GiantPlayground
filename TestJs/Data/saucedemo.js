"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sauce = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
exports.sauce = {
    url: {
        loginPage: 'https://www.saucedemo.com',
    },
    elements: {
        userName: { id: 'user-name' },
        password: { id: 'password' },
        loginButton: { id: 'login-button' },
        searchText: { id: 'body' },
    },
    open(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.get(this.url.loginPage);
        });
    },
    enterUsername(driver, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userNameElement = yield driver.findElement(selenium_webdriver_1.By.id(this.elements.userName.id));
            yield userNameElement.sendKeys(username);
        });
    },
    enterPassword(driver, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordElement = yield driver.findElement(selenium_webdriver_1.By.id(this.elements.password.id));
            yield passwordElement.sendKeys(password);
        });
    },
    submitLogin(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginButtonElement = yield driver.findElement(selenium_webdriver_1.By.id(this.elements.loginButton.id));
            yield loginButtonElement.click();
        });
    },
};
//# sourceMappingURL=saucedemo.js.map