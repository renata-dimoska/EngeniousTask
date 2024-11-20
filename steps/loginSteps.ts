import { LoginPage } from "../pages/loginPage";

export class LoginSteps {
    public loginPage: LoginPage;

    constructor(loginPage: LoginPage) {
        this.loginPage = loginPage;
    }

    async loginToEngeniuosUniversity(email: string, password: string) {
        await this.loginPage.clickSignInButton();
        await this.loginPage.clickLoginLink();
        await this.loginPage.enterEmailAddress(email);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLoginButton();
    }

}