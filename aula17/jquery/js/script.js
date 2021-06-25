console.log('Eder lima');

var semJquery = document.getElementById('teste');

console.log(semJquery);


//$ signufica .documento.queryselect()

var comJquery = $("#teste");
// console.log(comJquery);
console.log(comJquery);


$("#teste").on("click", function() {
    console.log("Enviado");
})

//$("#teste").hide(); //sumir elementos


$.getJSON(
    "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks",
    function (data) {
        console.log(data);
    }
);

$.ajax({
    type:"POST",
    url:"https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks",
    data:{
        Title_task: "Adicionando com post Jquery",
        level:"30"
    }

})

