/// <reference types="cypress" />
import Button from './Button'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    //@ts-ignore
    cy.mount(<Button label='Test' />)
    cy.get('#lib-button').should('exist').and('not.be.disabled')
  
  })
})