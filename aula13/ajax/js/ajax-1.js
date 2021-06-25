function carregaDados(arquivo) {
    var httpRequest = new XMLHttpRequest();
    
    
    //na vlta chama: callback
    httpRequest.onload = mostrarDados;
   
    httpRequest.onloadstart = mostraLoader;
    //Requisita o arquivo/endereço
    
    httpRequest.open('GET', arquivo, true);
    httpRequest.send(null);
}

function mostraLoader() {
    var lista = document.getElementById('lista');
        lista.innerHTML = '<img src="img/ajax-loader.gif">'; 
}

//é necessidade do this é devido ao responseText ser inserido pelo httpRequest.onload
//e se tornar uma propriedade DESTA (this) função
    function mostrarDados() {
        var lista = document.getElementById('lista');
        lista.innerHTML = this.responseText;    
        console.log(this.responseText);
        //console.log(JSON.parse(this.responseText)); //converter de string para json
    }

//automatizado um botão para fazer ajax
// var btnProdutos = document.getElementById('btn-produtos');
    // btnProdutos.addEventListener('click', function() {
        // carregaDados('produtos.json');
    // });
// 
    var btnProdutos = document.getElementById('btn-produtos');
    btnProdutos.addEventListener('click', function() {
        carregaDados('produtos.htm');
    });

var btnCarros = document.getElementById('btn-carros');
    btnCarros.addEventListener('click', function() {
        carregaDados('carros.htm');
});

var btnFrutas = document.getElementById('btn-frutas');
    btnFrutas.addEventListener('click', function() {
        carregaDados('frutas.htm');
});