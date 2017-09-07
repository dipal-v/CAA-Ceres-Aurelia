# features/simple.feature
Feature: Example feature
  As a user of ceres
  I want to browse around
  So that I can concentrate on digital user experience

  Scenario: Simple view
    Given I am on home page
    When I click on "Simple"
    Then I should see "Test messenger service"
