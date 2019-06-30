Feature: Clark Test
  # Enter feature description here

  Scenario: Verify user is able to login to Clark
    Given user open the Clark website
    And Click on Login link
    When enter email id "steffen.glomb@posteo.de"
    And enter password "Hallo123"
    And Click on Login button
    Then user is in "Deine Verträge" page
    And user click on abmelden button


  Scenario: Verify success message when user is sending email to invite his friend
    Given user open the Clark website
    And Click on Login link
    When enter email id "steffen.glomb@posteo.de"
    And enter password "Hallo123"
    And Click on Login button
    Then verify user has "3" contract with "GUT VERSICHERT"
    And user click on abmelden button

  Scenario: Verify Renteneinkommen is greater than 2400 euro
    Given user open the Clark website
    And Click on Login link
    When enter email id "steffen.glomb@posteo.de"
    And enter password "Hallo123"
    And Click on Login button
    When user click on "Rente" link
    Then verify user has Renteneinkommen greater than "2400" euro
    And user click on abmelden button

  Scenario: Verify text Du hast alle empfohlenen Produkte! is present on bedarf page
    Given user open the Clark website
    And Click on Login link
    When enter email id "steffen.glomb@posteo.de"
    And enter password "Hallo123"
    And Click on Login button
    When user click on "Bedarf" link
    Then Verify text "Du hast alle empfohlenen Produkte!" is present
    And user click on "Clark jetzt empfehlen" link present
    And user enter invitation emailid "sweetfrns4verr@gmail.com"
    And user click on "E-Mail senden"
    Then Verify success message is "erfolgreich versendet"
    And user click on abmelden button







