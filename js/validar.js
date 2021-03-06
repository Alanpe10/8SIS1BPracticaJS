/* 
javascript es un lenguaje de programcion que maneja diferentes paradigmas de programcion
entre ellos tenemos:

POO (Orientada a Objetos )

P Orientada a Funciones (programcion funcional)

P Orientada a eventos 

P Orientada a Componentes 

POO 
se maneja el DOM (La interfaz del documento) nos va servir para manipular
toda la interfaz de la pagina web, cambiando su comportamineto, estilos, eventos,
funciones, etc para la navegacion o la operacion del usuario 

PF 
MAneja el DOM para la creacion de funciones especificas a traves de promesas,
callbacks [son funciones de programcion que mandan a llamar a otras funciones],
rollback [funciones recursivas dentro de funciones] todas las funciones nos deben de regresar algun valor

cada funcion va a realizar una operacion del DOM o dentro del DOM, y esto facilita 
dentro de la programacion ya que se crean metodos especificos para especializar operaciones

los tipos de valores que se pueden retornar son: variables, cadenas, funciones, booleanos, entre otros

P O E (android, ionic creacion de apps moviles)
se maneja en componentes a partir de secuencias o eventos, (puede ser pantallas tactiles, botones, 
apis, cualquier otro tipo de llamada)las cuales nos van a ayudar a distinguir el tipo
de proceso, respuesta, tiempo de operacion, y otros detalles que se encuntran la 
aplicacion o navegador o dispositivo que realizo la peticion, mezcla los 
paradigmas POO y PF 

POC
utiliza componentes que sirven para la estandalizacion y reutilizacion de codigo, 
estable, reglas, comportamiento, las operaciones, metodos, para realizar una
funcion especifica.

*/

//POO

function validar(formulario) {

    //function nombre_funcion(argumentos)
    // se pueden utilizar, sentencias de control, bucles, condicionales, herencia, polimorfismo
    //sobrecarga, encapsulamiento, etc.


    if (formulario.nombre.value.length < 5) {

        alert("Escriba por lo menos 5 caracteres en el campo nombre");
        //posicionar el puntero donde ocurrio el error
        formulario.nombre.focus();
        return false;
    }

    /* 
    vamos a crear el fragmento de codigo para verificar que dentro del campo
    de nombre solo se ingresen letras
    */

    var checkSt = formulario.nombre.value; //obtener el valor del nombre 

    //definir que es correcto para esta vailidacion

    var checkOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    //varieble para devolver si es verdadero o falso el valor 

    var allValid = true;

    for (i = 0; i < checkSt.length; i++) {
        var ch = checkSt.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }

    }
    if (!allValid) {
        alert("Escriba solo letras en el campo nombre");
        formulario.nombre.value;
        return false;
    }

    /* 
    funcion solo para validar unicamente numeros
    */

    var checkSt = formulario.edad.value; //obtener el valor del edad 

    //definir que es correcto para esta vailidacion

    var checkOK = "1234567890";

    //varieble para devolver si es verdadero o falso el valor 

    var allValid = true;

    for (i = 0; i < checkSt.length; i++) {
        var ch = checkSt.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }

    }
    if (!allValid) {
        alert("Escriba solo numeros en el campo edad");
        formulario.edad.value;
        return false;
    }

    /*
    funcion que se encargue de validar el correo electronico a traves de una 
    expresion regular
    xxxxxx@xxxx.xxx     xxxx.xxx@xxxx.xxx.xx
    formato de cadena ya sea de salida o de entrada
    */

    var txt = formulario.email.value;

    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?"":"no")+ "valido");

    return b.test(txt);
}