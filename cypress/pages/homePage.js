export class homePage{


    weblocators = {
        search_input: '.form-control-input-lg',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title= "MacBook"]',
        addtocart: 'Add to Cart',
        suceessMessages: 'di.alert.alert-success.alert-dismissible'
    }

    //creating the meathods
    searchProduct(productName){
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }
    addToCart(){
        cy.contains(this.weblocators.addtocart).first().click()
    }
    verifySucessMessage(){
        return cy.get(this.weblocators.suceessMessages)
    }

}