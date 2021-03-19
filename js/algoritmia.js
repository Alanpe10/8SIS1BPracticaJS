//problema 1

function problema1(){

    //obtener el valor del input
    var p1_input = document.querySelector('#p1-input').value;

    //dividir el input por espacios, meterio en un array e invertir el array

    var p1_array = p1_input.split(' ').reverse();

    //construir la string final a partir del array invertido 

    var p1_res = '';

    //vamos a crear una funcion anonima que me retorne un resultado

    p1_array.forEach(function (palabra, i){
        //si es el principio o final de la palabra no se agrega espacio
        if(i!=0 || i!=p1_array.length) pi_res += ' ';
        p1_res += palabra;
    });

    //imprimir el valor final en el output
    document.querySelector('#p1-output').textContent = pi_res;
}