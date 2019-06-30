package stepdefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobject.ClarkAction;

public class MyStepdefs {

    ClarkAction clarkAction = new ClarkAction();

    @Given("^user open the Clark website$")
    public void user_open_the_Clark_website() throws Throwable {
        clarkAction.open_clark();
    }

    @And("^Click on Login link$")
    public void click_on_Login_button() throws Throwable {
        clarkAction.login_Clark();
    }

    @And("^Click on Login button")
    public void clickOnLoginButton() throws Throwable {
        clarkAction.loginButton();
    }


    @When("^enter email id \"(.*?)\"$")
    public void enterEmailId(String emailid) {
        clarkAction.Enter_Emailid(emailid);
    }

    @And("^enter password \"(.*?)\"$")
    public void enterPassword(String password) {
        clarkAction.Enter_Password(password);
    }


    @Then("^user is in \"(.*?)\" page$")
    public void userIsInPage(String title) throws Throwable {
        clarkAction.verifyAfterLoginPage(title);
    }

    @When("^user click on Rente link$")
    public void userClickOnRenteLink() {
        
    }

    @Then("^verify user has Renteneinkommen greater than \"(.*?)\" euro$")
    public void verifyUserHasRenteneinkommenGreaterThanEuro(int amount) throws Throwable {
        clarkAction.verifyRenteneinkommen(amount);
    }


    @When("^user click on \"(.*?)\" link$")
    public void userClickOnLink(String link) throws Throwable {
        clarkAction.clickOnLink(link);
    }

    @And("^user click on abmelden button$")
    public void userClickOnAbmeldenButton() {
        clarkAction.logout_functionality();

    }

    @Then("^Verify text \"(.*?)\" is present$")
    public void verifyTextIsPresent(String text) throws InterruptedException {
      clarkAction.text_verification();
    }

    @And("^user enter invitation emailid \"(.*?)\"$")
    public void userEnterinvitationEmailid(String invitationEmailid) throws InterruptedException {
        clarkAction.invitation_emailid(invitationEmailid);

    }

    @And("^user click on \"(.*?)\"$")
    public void userClickOnEMailSenden(String button) throws InterruptedException {
        clarkAction.email_senden_button(button);

    }

    @Then("^Verify success message is \"(.*?)\"$")
    public void verifySuccessMessageIs(String successMsg) throws InterruptedException {
        Thread.sleep(2500);
        clarkAction.verifySuccessMsg(successMsg);
    }


    @Then("verify user has \"(.*?)\" contract with \"(.*?)\"")
    public void verifyUserHasContractWith(int count, String contract) {
        clarkAction.gutContractCount(count,contract);
    }

    @And("user click on \"(.*?)\" link present")
    public void userClickOnLinkPresent(String link) {
        clarkAction.clickOnLinkPresent(link);
    }
}


