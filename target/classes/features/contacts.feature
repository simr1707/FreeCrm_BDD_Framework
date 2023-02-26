Feature: Free CRM Create Contacts
Scenario Outline: Free CRM Create a new contact scenario
    Given user is already on login page
    When title of login page is FREE CRM
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    Then user is on homepage
    Then user moves to new contacts page
    Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
    Then close the browser
    
Examples:
    |username|password|firstname|lastname|position|
    |simr17070|Simran12345|simran|singh|manager   |
    |simr17070|Simran12345|joy   |das |employee   |
    