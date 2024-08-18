import utils from "../utils"
import {Given} from "@badeball/cypress-cucumber-preprocessor";
import * as locators from "../../fixtures/locators";

Given("simple login to {string} with {string}", function (name, id){
    cy.fixture(utils.getFixtureFile("users.json")).as("credentials");
    cy.get("@credentials").then((entry)=>{
        let data = entry.filter((item)=>item.id == id).shift();
        let module = Cypress.env(name);
        cy.visit(module);
        cy.wait(5000);
        cy.xpath(locators.testProject.NOM_COMPTE).click();
        cy.xpath(locators.testProject.MAIL_INPUT).type(data.username);
        cy.xpath(locators.testProject.PASSWORD_INPUT).type(data.password);
        cy.xpath(locators.testProject.CONNEXION_BUTTON).click();
    })
});