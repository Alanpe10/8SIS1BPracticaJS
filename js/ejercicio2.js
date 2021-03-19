function validarventas(e){

    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
}

function comision(){

    var v1 = document.formulario.venta1.value;
    var v2 = document.formulario.venta2.value;
    var v3 = document.formulario.venta3.value;
    var suel = document.formulario.sueldo.value;

    var vent1 = parseInt(v1);
    var vent2 = parseInt(v2);
    var vent3 = parseInt(v3);
    var sueld = parseInt(suel);


    com = (vent1 + vent2 + vent3) * .10;
    sueldototal = com +sueld
    console.log(com);
    document.formulario.sueldoc.value = "$"+sueldototal;

}