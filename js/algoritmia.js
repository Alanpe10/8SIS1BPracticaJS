//problema 1

function problema1() {
    
    //obtener el valor del input
    var p1_input = document.querySelector('#p1-input').value;

    //dividir el input por espacios, meterlo en un array e invertir el array

    var p1_array = p1_input.split(' ').reverse();

    //construir la string final a partir del array invertido

    var p1_res = '';

    //vamos a crear una funccion anonima que me retorne un resultado

    p1_array.forEach(function (palabra, i){
        //si es el principio o final de la palabra no se agrega espacio
        if(i!=0 || i!=p1_array.length) p1_res += ' '; 
        p1_res += palabra;
    });

    //imprimir el valor final en el output
    document.querySelector('#p1-output').textContent = p1_res;



}


//problema 2

function problema2() {
    /*
    para encontrar el minimo productoe scalar entre 2 vectores tenemos que realizar
    las operaciones correspondientes.
    Con el maximo valor de un vector por el minimo vector del otro valor, con eso
    se encuentra el producto escalar
    */

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;


    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //construir el vector

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores

    v1 = v1.sort(function (a,b){
        return b-a;
    });

    v2 = v2.sort(function (a,b){
        return b-a;
    });

    //invertirmos el segundo vector

    v2 = v2.reverse();

    //producto

    var p2_producto = 0;

    for(var i = 0; i< v1.length; i++){

        p2_producto += v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 'El producto escalar es ...' + p2_producto;
}