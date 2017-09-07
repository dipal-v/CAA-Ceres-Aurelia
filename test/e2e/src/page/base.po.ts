import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

export class BasePage {
	constructor() {
	}

	getURL(text: string) {
		return browser.get('/');
	}

	clickAnchorByLinkText(text: string) {
		var condition = ExpectedConditions.visibilityOf(element(by.linkText(text)));
        browser.wait(condition, 5000);
        return element(by.linkText(text)).click();
	}

	findTextByXPath(text: string){
		var xpath= "//*[contains(text(),'"+text+"')]";
        var condition = ExpectedConditions.visibilityOf(element(by.xpath(xpath)));
        return browser.wait(condition, 5000);
	}

	getCurrentPageTitle() {
		return browser.getTitle();
	}
	
	navigateTo(href: string) {
		element(by.css('a[href="' + href + '"]')).click();
		return browser.waitForRouterComplete();
	}

	acceptAlertDialog() {
		return browser.wait(() => {
			return browser.switchTo().alert().then(
				// use alert.accept instead of alert.dismiss which results in a browser crash
				function(alert) { alert.accept(); return true; },
				function() { return false; }
			);
		});
	}
}