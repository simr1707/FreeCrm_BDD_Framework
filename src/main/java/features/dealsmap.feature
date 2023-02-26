Feature: Deal Data Creation
Scenario: Free CRM Login Test Scenario
    Given user is already on login page
    When title of login page is FREE CRM
    Then user enters his username and password
    |username|password|
    |simr17070|Simran12345|
    Then user clicks on login button	
    Then user is on homepage
    Then user moves to a new deal page
    Then user fills deal details
|title|amount|probability|commission|
|test deal 1|1000|50|10|
|test deal 2|2000|60|20|
|test deal 3|3000|70|30|
    
    Then close the browser