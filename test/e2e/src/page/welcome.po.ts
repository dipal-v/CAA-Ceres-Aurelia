import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';
import { BasePage } from "./base.po";

export class WelcomePage extends BasePage{
    firstName: string;
    lastName: string;

    constructor(){
        super();
    }

    setFirstname(value: string) {
        this.firstName = value;
        let firstNameEl = element(by.valueBind('firstName'));
        return firstNameEl.clear().then(() => firstNameEl.sendKeys(value));
    }

    setLastname(value: string) {
        this.lastName = value;
        let lastNameEl = element(by.valueBind('lastName'));
        return lastNameEl.clear().then(() => lastNameEl.sendKeys(value));
    }

    getFullname() {
        return element(by.css('.help-block')).getText();
    }

    pressSubmitButton() {
        return element(by.css('button[type="submit"]')).click();
    }

    openAlertDialog() {
        return browser.wait(() => {
            this.pressSubmitButton();

            return browser.switchTo().alert().then(
                // use alert.accept instead of alert.dismiss which results in a browser crash
                function(alert) { alert.accept(); return true; },
                function() { return false; }
            );
        });
    }
}
