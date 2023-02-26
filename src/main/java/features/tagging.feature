@FunctionalTest
Feature: Free CRM application testing
@SmokeTest @RegressionTest @End2End
Scenario: login with correct username and password
Given This is a valid login test
@SmokeTest @End2End
Scenario: login with correct username and password
Given This is a invalid login test
@RegressionTest
Scenario: Create a contact
Given This is a contact test case
@End2End
Scenario: Create a deal
Given This is a deal test case
@SmokeTest
Scenario: Create a task
Given This is a task test case
@RegressionTest
Scenario: Create a case
Given This is a case test case
@SmokeTest @End2End
Scenario: verify left panels links
Given clicking on left panel links
@SmokeTest @End2End
Scenario: search a deal
Given This is a search deal test
@RegressionTest
Scenario: search a case
Given This is a search case test
@End2End
Scenario: search a contact
Given This is a search contact test
@SmokeTest
Scenario: search a call
Given This is a search call test
@SmokeTest @End2End
Scenario: search a email
Given This is a search email test