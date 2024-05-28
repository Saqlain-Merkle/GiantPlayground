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
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const yahoo_1 = require("../Data/yahoo");
const facebook_1 = require("../Data/facebook");
const saucedemo_1 = require("../Data/saucedemo");
const axios_1 = require("axios");
(0, mocha_1.describe)("Aonther test", () => {
    let driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            const chromeOption = new chrome_1.Options().addArguments('--headless');
            const capabilities = selenium_webdriver_1.Capabilities.chrome().merge(chromeOption);
            driver = yield new selenium_webdriver_1.Builder().withCapabilities(capabilities).build();
        });
    });
    (0, mocha_1.it)('go to facebook', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            yield driver.get(facebook_1.facebook.url.mainPage);
            const title = yield driver.getTitle();
            (0, chai_1.expect)(title).to.include(facebook_1.facebook.title.pageTitle);
            console.log(title);
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            driver.quit();
        });
    });
});
(0, mocha_1.describe)("Playing Around", () => {
    let driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            const chromeOption = new chrome_1.Options().addArguments('--headless');
            const capabilities = selenium_webdriver_1.Capabilities.chrome().merge(chromeOption);
            driver = yield new selenium_webdriver_1.Builder().withCapabilities(capabilities).build();
        });
    });
    (0, mocha_1.it)('Yahoo', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            yield driver.get(yahoo_1.yahoo.url.loginPage);
            const title = yield driver.getTitle();
            (0, chai_1.expect)(title).to.include(yahoo_1.yahoo.title.pageTitle);
            console.log(title);
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            driver.quit();
        });
    });
});
(0, mocha_1.describe)("log in", () => {
    let driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const chromeOption = new chrome_1.Options().addArguments('--headless');
            const capabilities = selenium_webdriver_1.Capabilities.chrome().merge(chromeOption);
            driver = yield new selenium_webdriver_1.Builder().withCapabilities(capabilities).build();
            yield saucedemo_1.sauce.open(driver);
        });
    });
    (0, mocha_1.it)('try log in', function () {
        return __awaiter(this, void 0, void 0, function* () {
            saucedemo_1.sauce.enterUsername(driver, "username");
            saucedemo_1.sauce.enterPassword(driver, "password");
            saucedemo_1.sauce.submitLogin(driver);
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver.quit();
        });
    });
});
(0, mocha_1.describe)("More Test", () => {
    let driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const chromeOption = new chrome_1.Options().addArguments('--headless');
            const capabilities = selenium_webdriver_1.Capabilities.chrome().merge(chromeOption);
            driver = yield new selenium_webdriver_1.Builder().withCapabilities(capabilities).build();
        });
    });
    (0, mocha_1.it)('look for Labs', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const apicall = yield axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1');
            (0, chai_1.expect)(apicall.status).to.equal(200);
            const call = apicall.data;
            (0, chai_1.expect)(call.userId).to.equal(1);
            (0, chai_1.expect)(call.id).to.equal(1);
            (0, chai_1.expect)(call.title).to.equal("delectus aut autem");
            (0, chai_1.expect)(call.completed).to.equal(false);
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver.quit();
        });
    });
});
//# sourceMappingURL=secondtest.js.map