declare global {
    namespace Cypress {
      interface Chainable<Subject = any> {
        getByData(attr: string): Chainable<Subject>;
        login(username?: string, password?: string): void;
      }
    }
  }
  
  export {};