declare global {
    namespace Cypress {
      interface Chainable<Subject = any> {
        getByData(attr: string): Chainable<Subject>;
      }
    }
  }
  
  export {};