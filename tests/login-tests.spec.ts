import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {LoginSteps} from '../steps/loginSteps';
import { envConfig } from '../playwright.config';

test.beforeEach(async ({ page }) => {
  await page.goto(envConfig.baseurl);
});

test.describe('Login page', () => {
  
  test('User logs in to the Engenious University', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginSteps = new LoginSteps(loginPage);
    if(await loginPage.webinarPopupModalCloseButton.isVisible()) {
      await loginPage.clickWebinarPopupmodalCloseButton();
    };
    await loginSteps.loginToEngeniuosUniversity(envConfig.useremail, envConfig.password);
    await expect(loginPage.signInButton).not.toBeVisible();
    await expect(loginPage.websiteLogo).toBeVisible();
    await loginPage.clickSideNavigationMenuIcon();
    await expect(loginPage.userName).toBeVisible();
    await expect(page).toHaveURL('https://university.engenious.io/');
  });

});
