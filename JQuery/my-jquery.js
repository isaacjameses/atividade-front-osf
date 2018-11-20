$(function(e){
    $("div#lerMais").hide();
})
// essa função é chamada no 'Onclick' do butão "mostrar mais"
function mostrarMais(){
    // passando a div com o id="div#lerMais" para uma variavel.(essa div é onde está o restante do conteúdo)
    var element = $("div#lerMais"); 
        // atributo display indica se a div está sendo mostrada ou não.
        if(element.css("display") == "none"){
            // altero o texto do botão através do atributo .html
            $("#btnMostrar").html("Mostrar Menos");
            element.fadeIn(1000);
        }
        else{ 
            $("#btnMostrar").html("Mostrar Mais");
            element.fadeOut(1000);
        }
}