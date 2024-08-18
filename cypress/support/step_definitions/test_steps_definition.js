import {When} from "@badeball/cypress-cucumber-preprocessor";
import {dataFileContent} from "../hooks";

When("get All {string} promo Products", function (data){
    cy.getAllPromoProducts(dataFileContent[data]);
});