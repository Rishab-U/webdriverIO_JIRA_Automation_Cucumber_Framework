import { browser } from '@wdio/globals'

class Jira_Login{
    async Jira_Page(site) {
        await browser.url(site);
        await browser.pause(1000);
          let signElements = await $$('//span[contains(text(),"Sign in")]');
          for(let element of signElements){
            if(await element.isDisplayed(), await element.isClickable()){
                await element.click();
                await browser.pause(500);
                break;
            }
          }
          console.log("JIRA SignIN Page got Open");
    }

    async login_to_Jira(username,password){
        const headElement = await $('h5=Log in to continue');
          await browser.waitUntil(async()=>{ 
            if(await headElement.isDisplayed()){
                return true
            }
          },{
            timeout: 10000,
            timeoutMsg: "Page not found..."
          })

          const inputElement = await $('//input[@id="username"]');
          await inputElement.setValue(username);

          const continueButton = await $('span=Continue');

          await browser.waitUntil(async()=>{
            if(await continueButton.isDisplayed()){
                return true;
            }
          },{
            timeout:10000,
            timeoutMsg:"Page not found..."
          })

          await continueButton.click();
          await browser.pause(1000);

          const loginButton = await $('span=Log in');
          await browser.waitUntil(async()=>{
            if(await loginButton.isDisplayed()){
                return true;
            }
          },{
            timeout:10000,
            timeoutMsg:"Page not found..."
          })

          const inputPassword = await $('//input[@id="password"]');
          await inputPassword.setValue(password);
          await loginButton.click();
          await browser.pause(1000);

          try {
            const verificationElement = await $('span=Continue without two-step verification');
            await browser.waitUntil(async()=>{
            if(await verificationElement.isDisplayed()){
                return true;
            }
            },{
                timeout: 5000,
                timeoutMsg: "Verification Page not found..."
            })
            await verificationElement.click();
            await browser.pause(1000);

            } catch (error) {
                console.log("Getting Error message:",error);
            }

            console.log("JIRA get Login successfully");
    }

    async verify_jiraCompanyApp(){
        const jiraApp_Element = await $('//div[text()="start2finish"]');
            await browser.waitUntil(async ()=>{
                if(await jiraApp_Element.isDisplayed()){
                    return true;
                }
            },{
                timeout:10000,
                timeout: "Jira Company App not found!!"
            })
            console.log("Verify the result after login to the JIRA");
            return jiraApp_Element;
    }

    async select_JIRA_Application(){
        const page = await $('//a[contains(@href,"rishab")]');
        
        await browser.waitUntil(async ()=>{
            if(await page.isDisplayed()){
                return true;
            }
        },{
            timeout:10000,
            timeoutMsg:"Page not found!!"
        })

        await page.click();
        await browser.pause(1000);
    }
}

export default new Jira_Login();