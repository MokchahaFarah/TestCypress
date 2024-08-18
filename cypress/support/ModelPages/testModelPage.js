const utils = require("../utils");

Cypress.Commands.add("getAllPromoProducts" ,(data)=>{
    cy.log("hii");
    cy.log(data.nomProduit);

})