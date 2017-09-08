import {defineSupportCode} from 'cucumber';
import {by, element, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';
import {BasePage} from '../page/base.po';

defineSupportCode(function({Given, When, Then}){
    let basePage = new BasePage();

    Given('I am on home page', function() {
        return basePage.getURL('/');
    });

    When('I click on {stringInDoubleQuotes}', function(text){
        return basePage.clickAnchorByLinkText(text);
    });
    
    Then('I should see {stringInDoubleQuotes}', function(text){
        return basePage.findTextByXPath(text);
    });
});
