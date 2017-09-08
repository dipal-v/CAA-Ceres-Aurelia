import {defineSupportCode} from 'cucumber';
import {by, element, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';
import {WelcomePage} from '../page/welcome.po';

defineSupportCode(function({Given, When, Then}){
    let welcomePage = new WelcomePage();

    When('I Enter firstname {stringInDoubleQuotes} and lastname {stringInDoubleQuotes}', function(firstname, lastname){
        welcomePage.setFirstname(firstname);
        return welcomePage.setLastname(lastname);
    });

    When('I click the submit button', function(){
        return welcomePage.pressSubmitButton();
    });

    Then('I should see fullname', function(){
        let name = welcomePage.firstName + " " + welcomePage.lastName;
        return welcomePage.findTextByXPath(name.toUpperCase());
    });
});