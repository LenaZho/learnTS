Feature: Monobase Page Tests
  Test the Monobase donation page to make sure everything works correctly

  Background:
    Given I navigate to the Monobase page

  Scenario: Check main page elements are visible
    Then the page title should be visible
    And the Get Started button should be visible
    And the subscriber count should be visible

  Scenario: Check all social media buttons are visible
    Then the Telegram button should be visible
    And the Instagram button should be visible
    And the Twitter button should be visible
    And the Website button should be visible

  Scenario: Check social media buttons have correct links
    Then the Telegram button should link to "t.me/sternenkofund"
    And the Instagram button should link to "instagram.com/sternenkofund"
    And the Twitter button should link to "x.com/sternenkofund"
    And the Website button should link to "sternenkofund.org"

  Scenario: Check Get Started button is clickable
    Then the Get Started button should be enabled
