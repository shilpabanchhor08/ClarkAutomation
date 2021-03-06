$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("clarkTestWebsite.feature");
formatter.feature({
  "line": 1,
  "name": "Clark Test",
  "description": "",
  "id": "clark-test",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# Enter feature description here"
    }
  ],
  "line": 4,
  "name": "Verify user is able to login to Clark",
  "description": "",
  "id": "clark-test;verify-user-is-able-to-login-to-clark",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open the Clark website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter email id \"steffen.glomb@posteo.de\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter password \"Hallo123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is in \"Deine Verträge\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on abmelden button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.user_open_the_Clark_website()"
});
formatter.result({
  "duration": 8909536919,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_on_Login_button()"
});
formatter.result({
  "duration": 5542191396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "steffen.glomb@posteo.de",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterEmailId(String)"
});
formatter.result({
  "duration": 123178203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hallo123",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 68684290,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 7224722112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deine Verträge",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userIsInPage(String)"
});
formatter.result({
  "duration": 62402613,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAbmeldenButton()"
});
formatter.result({
  "duration": 2350010894,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify success message when user is sending email to invite his friend",
  "description": "",
  "id": "clark-test;verify-success-message-when-user-is-sending-email-to-invite-his-friend",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user open the Clark website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter email id \"steffen.glomb@posteo.de\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter password \"Hallo123\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify user has \"3\" contract with \"GUT VERSICHERT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click on abmelden button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.user_open_the_Clark_website()"
});
formatter.result({
  "duration": 4120869081,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_on_Login_button()"
});
formatter.result({
  "duration": 498449492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "steffen.glomb@posteo.de",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterEmailId(String)"
});
formatter.result({
  "duration": 161269897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hallo123",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 72820115,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 4952370875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    },
    {
      "val": "GUT VERSICHERT",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.verifyUserHasContractWith(int,String)"
});
formatter.result({
  "duration": 169006224,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAbmeldenButton()"
});
formatter.result({
  "duration": 2658438251,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify Renteneinkommen is greater than 2400 euro",
  "description": "",
  "id": "clark-test;verify-renteneinkommen-is-greater-than-2400-euro",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user open the Clark website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "enter email id \"steffen.glomb@posteo.de\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "enter password \"Hallo123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user click on \"Rente\" link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "verify user has Renteneinkommen greater than \"2400\" euro",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on abmelden button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.user_open_the_Clark_website()"
});
formatter.result({
  "duration": 4096086553,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_on_Login_button()"
});
formatter.result({
  "duration": 707876444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "steffen.glomb@posteo.de",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterEmailId(String)"
});
formatter.result({
  "duration": 310517456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hallo123",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 85713425,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 4915465884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rente",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 2093642605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2400",
      "offset": 46
    }
  ],
  "location": "MyStepdefs.verifyUserHasRenteneinkommenGreaterThanEuro(int)"
});
formatter.result({
  "duration": 4032344206,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAbmeldenButton()"
});
formatter.result({
  "duration": 2631215757,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify text Du hast alle empfohlenen Produkte! is present on bedarf page",
  "description": "",
  "id": "clark-test;verify-text-du-hast-alle-empfohlenen-produkte!-is-present-on-bedarf-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user open the Clark website",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter email id \"steffen.glomb@posteo.de\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "enter password \"Hallo123\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user click on \"Bedarf\" link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify text \"Du hast alle empfohlenen Produkte!\" is present",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user click on \"Clark jetzt empfehlen\" link present",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter invitation emailid \"sweetfrns4verr@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user click on \"E-Mail senden\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify success message is \"erfolgreich versendet\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user click on abmelden button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.user_open_the_Clark_website()"
});
formatter.result({
  "duration": 4130181231,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_on_Login_button()"
});
formatter.result({
  "duration": 506414512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "steffen.glomb@posteo.de",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterEmailId(String)"
});
formatter.result({
  "duration": 237609731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hallo123",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 82713671,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 4986344379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bedarf",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 2362416096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Du hast alle empfohlenen Produkte!",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.verifyTextIsPresent(String)"
});
formatter.result({
  "duration": 3084076161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clark jetzt empfehlen",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userClickOnLinkPresent(String)"
});
formatter.result({
  "duration": 30520915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweetfrns4verr@gmail.com",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userEnterinvitationEmailid(String)"
});
formatter.result({
  "duration": 5175662230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-Mail senden",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userClickOnEMailSenden(String)"
});
formatter.result({
  "duration": 2089950512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "erfolgreich versendet",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.verifySuccessMessageIs(String)"
});
formatter.result({
  "duration": 4531673200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAbmeldenButton()"
});
formatter.result({
  "duration": 3251109476,
  "status": "passed"
});
});