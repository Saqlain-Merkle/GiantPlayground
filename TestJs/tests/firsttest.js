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
const config_1 = require("../Data/config");
(0, mocha_1.describe)("First Test", () => {
    let driver;
    (0, mocha_1.before)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            const chromeOption = new chrome_1.Options().addArguments('--headless');
            const capabilities = selenium_webdriver_1.Capabilities.chrome().merge(chromeOption);
            driver = yield new selenium_webdriver_1.Builder()
                .withCapabilities(capabilities)
                .build();
        });
    });
    (0, mocha_1.it)("go to google", function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            yield driver.get(config_1.config.url.google);
            const title = yield driver.getTitle();
            (0, chai_1.expect)(title).to.equal(config_1.config.title.pageTitle);
            console.log(title);
        });
    });
    (0, mocha_1.after)(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            driver.quit;
        });
    });
});
//# sourceMappingURL=firsttest.js.map