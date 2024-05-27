import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
import {Options} from "selenium-webdriver/chrome";
import {expect} from "chai" ;
import {it, describe, after, before} from "mocha"
import {config} from "../Data/config"

describe("First Test", () => {
    let driver: WebDriver;

    before(async function () {

            const chromeOption = new Options().addArguments('--headless')
            const capabilities = Capabilities.chrome().merge(chromeOption)
            driver = await new Builder()
                .withCapabilities(capabilities)
                .build()
        }
    )

    it("go to google", async function () {
        await driver.get(config.url.google)
        const title = await driver.getTitle();
        expect(title).to.equal(config.title.pageTitle);
        console.log(title);
    });

    after(async function () {
         driver.quit
    })
});

