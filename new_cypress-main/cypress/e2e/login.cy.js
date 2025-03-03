describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');  
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

         })



         it('Восстановлене пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })



         it('Верный логин, неверный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio88');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');  
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   
            })

        it('Неверный логин, верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.r');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       
            }) 


        it('Логин без собачки, верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           
            })  
          
        it('Вести логин GerMan@Dolnikov.ru', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Авторизация прошла успешно');  
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               
            })           

            
 
 })
 
 
 // + Верный логин и верный пароль
 // + Восстановение пароля
 // + Верный логин, непраивльный пароль
 // + Неверный логин, верный пароль
 // + Логин без собачки, верный пароль
