import {homePage} from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'
import { it } from "node:test"



describe(' test automation', () =>{
    //"before action" this executes the login flow for user before any test witin the class
    before(()=>{
        cy.login(testData.login.username, testData.login.password)
    })
})

it('Add To Cart flow', ()=>{
    homePageObj.searchProduct(testData.product.productName)
    homePageObj.addToCart()
    homePageObj.verifySucessMessage().should('contain',testData.message.successMessage).and('contains', testData.product.productName);

})