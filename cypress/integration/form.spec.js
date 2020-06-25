describe('Form inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('button is disabled', () => {
        cy.get('button')
          .should('be.disabled')
    })

    it('can type a first name', () => {
        cy.get('input[name="firstName"]')
          .type('Karen')
          .should('have.value', 'Karen')
    })

    it('can type a last name', () => {
        cy.get('input[name="lastName"]')
          .type('Lei')
          .should('have.value', 'Lei')
    })

    it('can type an email', () => {
        cy.get('input[name="email"]')
          .type('karen@karen.com')
          .should('have.value', 'karen@karen.com')
    })

    it('can type a password', () => {
        cy.get('input[name="password"]')
          .type('password')
          .should('have.value', 'password')
    })

    it('can check the terms of service', () => {
        cy.get('input[name="terms"]')
          .check()
    })
})

describe('Form validation', () => {
    it('validates first name correctly', () => {
        cy.visit('http://localhost:3000')
        cy.contains('First name must be at least two characters long').should('not.exist')
        cy.get('input[name="firstName"]').type('a')
        cy.contains('First name must be at least two characters long')
        cy.get('input[name="firstName"]').type('b')
        cy.contains('First name must be at least two characters long').should('not.exist')
    })

    it('validates last name correctly', () => {
        cy.contains('Last name must be at least two characters long').should('not.exist')
        cy.get('input[name="lastName"]').type('a')
        cy.contains('Last name must be at least two characters long')
        cy.get('input[name="lastName"]').type('b')
        cy.contains('Last name must be at least two characters long').should('not.exist')
    }) 
    
    it('validates  email correctly', () => {
        cy.contains('Email must be a valid email address').should('not.exist')
        cy.get('input[name="email"]').type('a')
        cy.contains('Email must be a valid email address')
        cy.get('input[name="email"]').type('@a.com')
        cy.contains('Email must be a valid email address').should('not.exist')
    }) 

    it('validates password correctly', () => {
        cy.contains('Password must be at least six characters long').should('not.exist')
        cy.get('input[name="password"]').type('a')
        cy.contains('Password must be at least six characters long')
        cy.get('input[name="password"]').type('b')
        cy.contains('Password must be at least six characters long')
        cy.get('input[name="password"]').type('c')
        cy.contains('Password must be at least six characters long')
        cy.get('input[name="password"]').type('d')
        cy.contains('Password must be at least six characters long')
        cy.get('input[name="password"]').type('e')
        cy.contains('Password must be at least six characters long')
        cy.get('input[name="password"]').type('f')
        cy.contains('Password must be at least six characters long').should('not.exist')
    })

    it('validates terms correctly', () => {
        cy.get('input[name="terms"]').check()
        cy.contains('Terms of service must be checked').should('not.exist')
    })
})

describe('Submitting and deleting friends', () => {
    it('can submit and delete a friend', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name="firstName"]').type('Karen')
        cy.get('input[name="lastName"]').type('Lei')
        cy.get('input[name="email"]').type('karen@karen.com')
        cy.get('input[name="password"]').type('karenlei')
        cy.get('input[name="terms"]').check()
        cy.get('button').click()
        cy.get('h2').contains('Karen')
    })

})