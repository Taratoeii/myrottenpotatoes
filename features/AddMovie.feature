Feature: User can add movie

Scenario: Create New Movie pages
    Given I am on the RottenPotatoes home page
    When I follow "Add new movie"
    Then I should be on the Create New Movie page
    When I fill in "Title" with "Harry Potter"
    And I select "G" from "Rating"
    And I press "Save Changes"
    Then I should see "Create New Movie"
    
    