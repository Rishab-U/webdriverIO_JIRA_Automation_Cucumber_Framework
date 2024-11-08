Feature: Create JIRA Tickets with in the Project

    Scenario Outline: As a User, I want to create one or more JIRA Tickets within Project

        Given user is on Create JIRA Issue form
        When user select <project> and <issueType> from the respective drop-down list
        And give input <summaryDetails> in Summary field
        And select <assigneeName>
        Then verify that User would able to create the Ticket Successfully

        Examples:
            | project              | issueType | summaryDetails     | assigneeName |
            | Cucumber BDD Project | Story     | Cucumber Story 002 | Wanda        |
            | Cucumber BDD Project | Bug       | Cucumber Story 003 | Spider       |
            | Cucumber BDD Project | Task      | Cucumber Story 004 | Thor         |
