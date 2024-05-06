export default class DetalhesUsuarioPage{

    labelId = '[name="id"]';
    labelNome = '#userName';
    labelEmail = '#userEmail';
    buttonEditar = '[type ="button"]';
    buttonSalvar = '[type = "submit"]';
    buttonCancelar = '[type ="button"]';   


clickButtonEditar(){
    cy.get(this.buttonEditar).click();
}
clickButtonSalvar(){
    cy.get(this.buttonSalvar).click();    
}
clickButtonCancelar(){
    cy.get(this.buttonCancelar).click();
}

}