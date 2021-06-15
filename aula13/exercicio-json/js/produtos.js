var produtos = [
    {
       "id":1,
       "name":"Jaleco",
       "description":"Jaleco de alta qualidade",
       "price":"R$ 999,99",
       "available":true
    },
    {
       "id":2,
       "name":"Avental",
       "description":"Avental de alta qualidade",
       "price":"R$ 888,88",
       "available":true
    },
    {
       "id":3,
       "name":"Touca",
       "description":"Touca de alta qualidade ",
       "price":"R$ 777,77",
       "available":true
    },
    {
       "id":4,
       "name":"Fronha",
       "description":"Fronha de alta qualidade",
       "price":"R$ 666,66",
       "available":true
    },
    {
       "id":5,
       "name":"Embalagem",
       "description":"Embalagem de alta qualidade",
       "price":"R$ 555,55",
       "available":true
    },
    {
       "id":6,
       "name":"Porta talher",
       "description":"Porta talher de alta qualidade",
       "price":"R$ 444,44",
       "available":true
    },
    {
       "id":7,
       "name":"Porta absorvente",
       "description":"Porta Absorvente de alta qualidade",
       "price":"R$ 333,33",
       "available":true
    }
 ]


 var root = document.getElementById('root');
//  root.innerHTML = produtos;

//==================================================================================

// for (var i = 0; i < produtos.length; i++) {
//     var nome = produtos[i].name;
//     var descricao = produtos[i].description;
//     var valor = produtos[i].price;
//     // root.innerHTML += produtos[i].name + ' ' + produtos[i].description + ' ' + produtos[i].price + '<br>';
//     // console.log(produtos[i]);
//     // root.innerHTML += produtos[i].price + '<br>';
//     root.innerHTML += nome + ' ' + descricao + ' ' + valor + '<br>';
//}
//==================================================================================
for (var i = 0; i < produtos.length; i++) {
    var div = document.createElement('div');
    div.innerHTML = produtos[i].name + produtos[i].description + produtos[i].price;
    // div.innerHTML =

    root.appendChild(div);
}
//===================================================================================







