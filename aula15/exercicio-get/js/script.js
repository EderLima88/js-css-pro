var mostraTodosOsDados = document.getElementById('lista-dados');
var botaoEnviar = document.getElementById('enviar');
var validaStatus = document.getElementById('status');
var chamada = new XMLHttpRequest();
var url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos";

// console.log(validaStatus)


mostraTodosOsDados.addEventListener("click", function (event) {
    event.preventDefault();
    pegaValor();
    });


    botaoEnviar.addEventListener('click', function(event) {
        event.preventDefault();
        enviarDados()
    })

    pegaValor();

    function enviarDados(){
        chamada.open("POST", url, true);
        chamada.setRequestHeader("Content-type", "application/json;charset=UTF-8")

        var nomeImput = document.getElementById('nome').value;
        var precoImput = document.getElementById('preco').value;

        // console.log(nome, preco);

        chamada.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 201) {
                pegaValor()
            }
        }
    
        chamada.send(
            JSON.stringify({
                nome:nomeImput,
                preco:precoImput
            })
        );
    }



    function pegaValor() {
        if(navigator.onLine) {
            validaStatus.innerHTML = '<p>online</p>'
            chamada.open("GET", url, true);
            chamada.onreadystatechange = function () { //onreadystatechange verifica se tem alteração na requisição
            if (this.readyState === 4 && this.status === 200) {
                var arrayDeProdutos = JSON.parse(this.responseText);
                window.localStorage.setItem("produtos", JSON.stringify(arrayDeProdutos));
                mostraArray(arrayDeProdutos);            
            }
        };  
        }else {
            validaStatus.innerHTML = '<p>offline</p>'
            var valorLocalStorage = window.localStorage.getItem("produtos")
            mostraArray(JSon.parse(valorLocalStorage));
        }
          
    chamada.send();
    }

    function mostraArray(array) {

    var saida = ''
    var i;
    for(i=0; i<array.length; i++) {
        saida +=
        '<div class="container-card"><h1 class="titulo-card">' + array[1].nome +'</h1><div class="image"><img src="'+ array[i].imagem +'" alt="'+array[i].nome+'"></div><p class="preco">'+array[i].preco+'</p><p class="descricao">'+array[i].descricao+'</p><p class="loja">'+array[i].loja+'</p></div>'
        
        {/* saida += '<a>' + array[i].nome + '</a></br>'; */}
        console.log(saida);
    }

    document.getElementById('lista-de-produtos').innerHTML = saida;
    

    // console.log(saida);
};