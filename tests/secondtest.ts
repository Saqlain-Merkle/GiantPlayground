import {Builder, Capabilities, WebDriver, Key, By} from "selenium-webdriver";
import {Options} from "selenium-webdriver/chrome";
import {expect} from "chai";
import {describe, before, it, after} from "mocha";
import {yahoo} from "../Data/yahoo"
import {facebook} from "../Data/facebook"
import {sauce} from "../Data/saucedemo"
import axios from "axios";


describe("Aonther test", () => {

    let driver: WebDriver;

    before(async function () {
        this.timeout(10000);
        const chromeOption = new Options().addArguments('--headless')
        const capabilities = Capabilities.chrome().merge(chromeOption)
        driver = await new Builder().withCapabilities(capabilities).build()
    })
    it('go to facebook', async function () {
        this.timeout(10000);
        await driver.get(facebook.url.mainPage)
        const title = await driver.getTitle();
        expect(title).to.include(facebook.title.pageTitle);
        console.log(title);

    });
    after(async function () {
        this.timeout(10000);
        driver.quit()
    })
});

describe("Playing Around", () =>{

    let driver: WebDriver;

    before(async function() {
       this.timeout(10000);
        const chromeOption = new Options().addArguments('--headless')
        const capabilities = Capabilities.chrome().merge(chromeOption)
        driver = await new Builder().withCapabilities(capabilities).build()
    })

    it('Yahoo', async function(){
        this.timeout(10000);
        await driver.get(yahoo.url.loginPage)
        const title = await driver.getTitle();
        expect(title).to.include(yahoo.title.pageTitle);
        console.log(title);
    });

    after(async function(){
       this.timeout(10000)
        driver.quit()

    })
});

describe("log in", () =>{

    let driver: WebDriver;

    before(async function() {

        const chromeOption = new Options().addArguments('--headless')
        const capabilities = Capabilities.chrome().merge(chromeOption)
        driver = await new Builder().withCapabilities(capabilities).build()
        await sauce.open(driver);
    })

    it('try log in', async function(){

        sauce.enterUsername(driver,"username");
        sauce.enterPassword(driver,"password");
        sauce.submitLogin(driver)

    });

    after(async function(){

        driver.quit()

    })
});
   describe("More Test",() =>{
    let driver : WebDriver;

    before(async function(){
        const chromeOption = new Options().addArguments('--headless')
        const capabilities = Capabilities.chrome().merge(chromeOption)
        driver = await new Builder().withCapabilities(capabilities).build()
    })
        it('look for Labs',async function(){
            const apicall = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            expect(apicall.status).to.equal(200);
            const call = apicall.data;

            expect(call.userId).to.equal(1);
            expect(call.id).to.equal(1);
            expect(call.title).to.equal("delectus aut autem");
            expect(call.completed).to.equal(false);
        });
    after(async function(){
        driver.quit()
    })
});

