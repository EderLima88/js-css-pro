var botaoEnviar = document.getElementById('btn');

var chamada = new XMLHttpRequest();
var url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks';

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault()
    // console.log(event)
    salvarDados();
});

// var tarefaImput = document.getElementById('tarefa').value local errado
console.log(tarefaImput)

function salvarDados() {
    chamada.open("POST", url, true);
    chamada.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    var tarefaImput = document.getElementById('tarefa').value
    chamada.send(JSON.stringify({title_task:tarefaImput}));
}
