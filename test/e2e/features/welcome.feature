# features/welcome.feature
Feature: Example feature
  As a user of ceres
  I want to browse around
  So that I can concentrate on digital user experience

  Scenario: Welcome view
    Given I am on home page
    When I click on "Welcome"
    Then I should see "Welcome to the Aurelia"
    When I Enter firstname "Maha" and lastname "Singam"
    When I click the submit button
    Then I should see fullname