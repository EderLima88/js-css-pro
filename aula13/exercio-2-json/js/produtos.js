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

 for (var i = 0; i < produtos.length; i++) {
    var tr = document.createElement('tr');

    var tdNome = document.createElement('td');
    tdNome.innerHTML = produtos[i].name;
    var tdDesc = document.createElement('td');
    tdDesc.innerHTML = produtos[i].description;
    var tdPreco = document.createElement('td');
    tdPreco.innerHTML = produtos[i].price;




    tr.appendChild(tdNome);
    tr.appendChild(tdDesc);
    tr.appendChild(tdPreco);

    root.appendChild(tr);
 }