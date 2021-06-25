window.localStorage.setItem("nome", "Eder de Lima");

const data = {
    nome: 'Eder de Lima',
    idade: 41,
    rua: 'Av Bento'
};

window.localStorage.setItem("usuario", JSON.stringify(data));

const retornaObjetoDoStorage = window.localStorage.getItem('usuario');

console.log('mostra valor retornado', retornaObjetoDoStorage);
console.log('mostra valor retornado', JSON.parse(retornaObjetoDoStorage));

// window.localStorage.removeItem('nome');
// window.localStorage.removeItem('usuario');

window.localStorage.clear();


