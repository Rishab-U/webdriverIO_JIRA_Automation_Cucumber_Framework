import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect} from '@wdio/globals'
import page from '../pageObjects/login.Jira'
import cred from '../Testdata/creds.json' assert{type:"json"}

Given(/^User is on JIRA (.*) SignIn Page$/, async(site)=>{
    await browser.maximizeWindow();
    await page.Jira_Page(site);
});

When(/^User login with (.*) and (.*)$/,async(Username,Password)=>{
    Username = cred.username;
    Password = cred.password;
    await page.login_to_Jira(Username,Password);
});

Then(/^User should see Company JIRA Application is Present there$/,async ()=>{
    const expectElement = await page.verify_jiraCompanyApp();
    await expect(expectElement).toBeDisplayed();
})

When(/^User click on JIRA Application$/, async ()=>{
    await page.select_JIRA_Application();
})

Then(/^User should see url contain (.*)$/,async(companyName)=>{
    await expect(browser).toHaveUrl(expect.stringContaining(companyName));
})