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

function validar(formulario){

    //function nombre_funcion(argumentos)
    // se pueden utilizar, sentencias de control, bucles, condicionales, herencia, polimorfismo
    //sobrecarga, encapsulamiento, etc.


    if(formulario.nombre.value.length < 5){

        alert("Escriba por lo menos 5 caracteres en el campo nombre");
        //posicionar el puntero donde ocurrio el error
        formulario.nombre.focus();
        return false;
    }


}