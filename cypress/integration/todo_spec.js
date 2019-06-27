
//arrange - setup the application
// Act - take some sort of action with our application
// Assert - make an assertion
 
describe('test our to do list', () => {
    it('visits localhost:3000', () =>{
        cy.visit('http://localhost:3000');
    })
    it('should make the first item in our array todos', () => {
        cy.visit('http://localhost:3000');
        cy.get('.todo-list-container')
            .first()
            .container('done')
            .click();
    })

    it('should add a new todo', () => {
        cy.visit('http://localhost:3000')
        cy.get('todo-input')
           
            
    })
})
