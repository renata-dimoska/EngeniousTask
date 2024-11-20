import {Page} from 'playwright';

export class LoginPage {
    public page: Page;

    public webinarPopupModalCloseButton;
    public signInButton;
    public loginLink;
    public emailField;
    public passwordField;
    public loginButton;
    public sideNavigationMenuIcon;
    public userName;
    public websiteLogo;

    constructor(page: Page) {
        this.page = page;

        this.webinarPopupModalCloseButton = page.locator('button[class*="closeBtn"]'); //an example of a CSS locator
        this.signInButton = page.getByRole('button', {name: 'Sign In'});
        this.loginLink = page.getByRole('link', {name: 'Login'});
        this.emailField = page.getByPlaceholder('Email');
        this.passwordField = page.getByPlaceholder('Your password');
        this.loginButton = page.getByRole('button', {name: 'Login', exact: true});
        this.sideNavigationMenuIcon = page.locator('//button[contains(@class, "BurgerButton")]/div'); //an example of a xpath locator
        this.userName = page.getByRole('heading', { name: 'Renata Dimoska' })
        this.websiteLogo = page.locator('//a[contains(@class, "Logo")]');
    }

    async clickWebinarPopupmodalCloseButton() {
        await this.webinarPopupModalCloseButton.click();
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

    async enterEmailAddress(email: string) {
        await this.emailField.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickSideNavigationMenuIcon() {
        await this.sideNavigationMenuIcon.click();
    }
 
}