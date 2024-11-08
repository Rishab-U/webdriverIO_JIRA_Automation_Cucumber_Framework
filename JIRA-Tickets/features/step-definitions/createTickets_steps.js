import { Given, When, Then } from '@wdio/cucumber-framework';
import create from '../pageObjects/create.Ticket'




Given(/^user is on Create JIRA Issue form$/,async()=>{
    await create.click_createButton();
});

When(/^user select (.*) and (.*) from the respective drop-down list$/,async (project,issueType)=>{
    await create.add_Project(project);
    await create.add_IssueType(issueType);
});

When(/^give input (.*) in Summary field$/,async(summary)=>{
    await create.add_summary(summary);
});

When(/^select (.*)$/,async(assignee)=>{
    await create.add_assignee(assignee);
});

Then(/^verify that User would able to create the Ticket Successfully$/,async()=>{
    await create.click_submit();
});