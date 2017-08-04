import {defineSupportCode} from 'cucumber';
import {by, element, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';


defineSupportCode(function({Given, When, Then}){
    Given('I am on home page', function() {
        return this.driver.get('http://localhost:9000/');
    });

    When('I click on {stringInDoubleQuotes}', function(text){
        var condition = ExpectedConditions.visibilityOf(element(by.linkText(text)));
        this.driver.wait(condition, 5000);
        return element(by.linkText(text)).click();
    });
    
    Then('I should see {stringInDoubleQuotes}', function(text){
        var xpath= "//*[contains(text(),'"+text+"')]";
        var condition = ExpectedConditions.visibilityOf(element(by.xpath(xpath)));
        return this.driver.wait(condition, 5000);
    });
});
