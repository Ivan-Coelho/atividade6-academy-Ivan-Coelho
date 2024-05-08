export default class UsuarioPage{
    linkNovoUsuario = '.sc-gEvEer.fGGZSe';
    linkPaginaUsuarios = '.sc-eqUAAy.OPBKy';
    linkCadastroUsuario = '[href="/users/novo"]'; //quando página está vazia
    inputBuscaUsuario = '.sc-gsFSXq.mUpIH';    
    
    buttonDelete = '[data-test="userDataDelete"]'
    //buttonDelete = '.sc-fUnMCh.dttKkA';
    buttonDetalhes = '#userDataDetalhe'
    buttonProxima = '#paginacaoProximo';
    buttonAnterior = '#paginacaoVoltar';
    paginaAtual = "#paginacaoAtual";

    
    listaUsuarios = '#listaUsuarios > #userData';    
    
    labelEmail = '[data-test="userDataEmail"]';
    labelNome = 'p[data-test="userDataName"]';

    headerUsuarioNaoCadastro = 'h3';

    getListaUsuarios() {
        return cy.get(this.listaUsuarios); 
    }
    
    clickProximaPagina(){
        cy.get(this.buttonProxima).click()
    }

    clickPaginaAnterior() {
        cy.get(this.buttonAnterior).click();
    }


}