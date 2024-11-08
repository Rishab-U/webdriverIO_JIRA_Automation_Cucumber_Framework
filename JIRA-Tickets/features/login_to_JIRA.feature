Feature: Login to the Company JIRA Application

Scenario Outline: As a User, I want to create Jira Tickets

Given User is on JIRA <site> SignIn Page
When User login with username and password
Then User should see Company JIRA Application is Present there
When User click on JIRA Application
Then User should see url contain <companyName>

Examples:
    |  site                                 | companyName   |
    | https://www.atlassian.com/            | start2finish  |