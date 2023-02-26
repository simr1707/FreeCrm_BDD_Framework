Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
    #Given user is already on login page
   # When title of login page is FREE CRM
    #Then user enters "simr17070" and "Simran12345"
    #Then user clicks on login button
    #Then user is on homepage
    #Then close the browser

#with Examples Keyword    
Scenario Outline: Free CRM Login Test Scenario
    Given user is already on login page
    When title of login page is FREE CRM
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    Then user is on homepage
    Then close the browser 
Examples:
|username |password   |
|simr17070|Simran12345|
|simr1707 |Simran67890|
    

