Feature: Deal Data Creation
Scenario: Free CRM Login Test Scenario
    Given user is already on login page
    When title of login page is FREE CRM
    Then user enters username and password
    |simr17070|Simran12345|
    Then user clicks on login button
    Then user is on homepage
    Then user moves to new deal page
    Then user enters deal details
    |test deal|1000|50|10|
    Then close the browser