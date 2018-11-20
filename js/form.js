
function adicionaPessoaNaTabela(pessoa) {
    var pessoaTr = montaTr(pessoa);
    var tabela = document.querySelector("#tabela-pessoa");
    tabela.appendChild(pessoaTr);
}

function montaTr(pessoa) {
    var pessoaTr = document.createElement("tr");

    pessoaTr.appendChild(montaTd(pessoa.nome));
    pessoaTr.appendChild(montaTd(pessoa.sobrenome));
    pessoaTr.appendChild(montaTd(pessoa.email));

    return pessoaTr;
}

function montaTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}

function obtemPessoaDoFormulario(form) {

    var pessoa = {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        email: form.email.value
    }

    return pessoa;
}

var botaoAdicionar = document.querySelector("#btn-adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#custom-form");

    var pessoa = obtemPessoaDoFormulario(form);


    if(validaPessoa(pessoa)){
        adicionaPessoaNaTabela(pessoa);
        form.reset();
    }

});

function validaPessoa(pessoa){
    if(pessoa.nome.trim() == ""){
        alert("Prencha o campo de nome");
        return false
    }
    else if(pessoa.sobrenome.trim() == ""){
        alert("Prencha o campo de Sobrenome");
        return false
    }
    else if(pessoa.email.trim() == ""){
        alert("Prencha o campo de email");
        return false
    }
    return true;
}