import {PageObject_Welcome} from './welcome.po';
import {PageObject_Skeleton} from './skeleton.po';
import {PageObject_Simple} from './simple.po';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

describe('aurelia skeleton app', function() {
  let po_welcome: PageObject_Welcome;
	let po_skeleton: PageObject_Skeleton;
	let po_simple: PageObject_Simple;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();
	  po_simple = new PageObject_Simple();

    browser.loadAndWaitForAureliaPage("/");
  });

  it('should load the page and display the initial page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | CAA-Ceres-Aurelia');
  });

  it('should display greeting', () => {
    expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', () => {
    po_welcome.setFirstname('Rob');
    po_welcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(po_welcome.getFullname()).toBe('ROB EISENBERG');
  });

  it('should show alert message when clicking submit button', () => {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to users page', () => {
    po_skeleton.navigateTo('#/users');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Github Users | CAA-Ceres-Aurelia');
  });

	it('should have a working anchor', () => {
		po_skeleton.navigateTo('#/simple');
		po_simple.clickAnchor();
		expect(po_simple.acceptAlertDialog()).toBe(true);
	});
});
