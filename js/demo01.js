$( document ).ready(function() { 
//Busca elemento al que se le dio clic
        var close = document.getElementsByClassName("closebtn");
        //Contador
        var i;
        //Ciclo for para trabajar sobre el elemento al que se le dio clic
        for (i=0; i<close.length; i++)
        {
          //Al elemento se le da un evento
          close[i].onclick=function()
          {
            //obtener el elemento padre
            var div = this.parentElement;
            //Efecto de desaparecer o cambiar opacidad
            div.style.opacity = "0";
            //Controlar la opacidad con Tiempo
            setTimeout(function(){div.style.display = "none";}, 600);
          }
        }

//---------------------------------------------------------------------------------------------
$("#mifuncion").click(
function miFuncion(){
//Aqui va todo mi codigo
//Hola soy una variable
var miVariable0 = "Soy una variable que varia";
//Hola, soy una salida de consola y me usan para depurar este codigo
//Me veras en accion cuando abras tu pagina y oprimas F12 seleccionando la pestaña
console.log(miVariable0);
//Cambiando el valor de la variable
miVarriable0=10;
//Mostrando el nuevo valor
alert(miVariable0);
}
);
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
$("#bucles").click(
//Hola, soy otra funcion
function bucles()
{
    for(var x=0; x<10; x++){
    console.log(x);
}
console.log("Iniciando el segundo bucle: \n");
//Bucle cuenta atras
    for(var x=10; x>0; x--){ //Se puede poner el decremento antes por ejemplo --x
        console.log(x);
    }
}
);
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Segunda funcion While
$("#while").click(
function buclesWhile(){
    var contador = 0;
        while (contador<10){  //while (Condicion de paro)
        console.log(contador);
        contador++;
    }
    var contador1=10;
        while (contador1 >0){
        console.log(contador1);
        contador1--;
    }
}
);
//---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------
//Tercera funcion do While
$("#dowhile").click(
function buclesDoWhile()
{
    var contador3 = 0;
    do{                       //Estrutura en la cual minimo se entra al bucle al menos una vez
        console.log(contador3)
        contador3++;
    }while(contador3< 10);
}
);

/*  ------------------------OTRA FORMA DE HACER FUNCION DO WHILE ------------------------------
function buclesDoWhile()
{
    var contador3 = 0;
    do{                       //Estrutura en la cual minimo se entra al bucle una vez
        console.log(contador3)
    }while(contador3++, contador3< 10);  //Primero incrementa y despues compara
}
*/
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Cuarta Funcion para usar operadores aritmeticos
$("#operArit").click(
function operacionesAritmeticas()
{
    //Definicion de variables
    //Suma
    var op1 = 3;
    var op2 = 10;
    var op3 = 0;

    //Operacion suma
    res = op1 + op2;
    console.log("Suma! ");//Mostrar en consola
    console.log(res);
    //Operacion multiplicacion
    console.log("Multiplicacion!");
    res=op1 * op2;
    console.log(res);
    //Operacion Division
    console.log("Division!");
    res=op2/op1;
    console.log(res);
    //Operacion Resta
    console.log("Resta!")
    res = op1 - op2;
    console.log(res);
    //Operacion Modulo - residuo de division
    console.log("Modulo!")
    res = op1 % op2;
    console.log(res);
    //Operacion Exponencial
    console.log("Exponencial!")
    res = op1**2;
    console.log(res);
    //Operacion Raiz cuadrada
    console.log("Raiz cuadrada!")
    res = Math.sqrt(op2);
    console.log(res);
    //Operacion Logaritmo
    console.log("Logaritmo!")
    res = Math.log(op2);
    console.log(res);
    res = Math.log(-op2);
    console.log(res);
    res = Math.log(0);
    console.log(res);
}
);
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Quinta funcion operaciones logicas
$("#operLog").click(
function operacionesLogicas()
{
    //Valores booleanos
    var b = true;
    var c = false;
    var d = (b && c);
    console.log(d); //Tambien pudo ser console.log(b && c);
    //AND
    if(!(b && c)) //Negando condicion para que entre false(true && false)
    {
        console.log(c);
        console.log(d);
    }
    //OR
    console.log("OR!");
    var d = (b || c);
    console.log(d);
    //Numeros
    //Comparar dos numeros
    console.log("Comparar dos numeros!!");
    var g = 0;
    var f = 3;
    var h = -3;
        if(h<g)  //Si y solo si existe una sola linea no es necesario poner llaves ni en if ni en else
            console.log(h);
        else
            console.log(g);

    //Estructura Switch
    var opcion = 2;
    switch(opcion)
    {
        case 0:
         console.log(opcion);
        break;  //Sin break el programa no se detiente, hasta que encuentra uno

        case 1:
         console.log(opcion);
        break;

        case 2:
         console.log(opcion);
        break;

        case 3:
         console.log(opcion);
        break;

        case 4:
         console.log(opcion);
        break;

        default:
        console.error("No esta en linea");
    }
}
);
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Sexta Funcion arreglos
$("#arreglos").click(
function manejarArreglos(){
//Iniciar un arreglo con todos sus indices como enteros
var miArreglo = [5, 1, 3, 7, 8, 0, 9, 4];
//Posicion o indice 0, 1, 2, 3, 4 , 5 , 6 , 7

//Mostrar arreglo
console.log("Inicializar y mostrar todos los elementos de un arreglo");
for(var t=0; t< miArreglo.length; t++) //Bucle para las posiciones del arreglo
{
    console.log("Posicion o indice "+t+" : " +miArreglo[t]) //Mapeando indice con valor: hacer el valor de posicion imprimible
    //miArreglo[Posicion o indice]
}

//Busqueda Binaria
console.log("Buscar un arreglo un numero y romper el ciclo cuando se haya encontrado");
var valorReferencia=9;
for(var t = 0; t < miArreglo.length; t++){
    if(miArreglo[t] === valorReferencia) //=== Se valida que sea el mismo tipo de dato y el mismo valor
    {
    //Mostrar lo que encontre
    console.log("Valor encontrado en : "+t+" : " +valorReferencia);
    //Romper el ciclo
    break;
    }
    else//Si no lo encontre
    {
        //Mostrar donde voy
        console.log(miArreglo[t]);
    }
    //Seguir buscando
}

//Busqueda binaria con while
console.log("Buscar un arreglo un numero y romper el ciclo while cuando se haya encontrado");
var t = 0;
valorReferencia = 0;
var bandera = false; //Definir bandera como booleano
while( !bandera && (t < miArreglo.length)) //la negacion de bandera (cuando bandera tiene valor true) y t menor que el tamaño del arreglo
{
    console.log(miArreglo[t]+" : "+valorReferencia);
    bandera = (miArreglo[t] == valorReferencia); //Las condiciones regresan un valor true o false cuando 0 = 0
    console.log(bandera);
    t++;
}
//Hasta que sale del bucle while continua con lo siguiente:
//Mostrar donde lo encontre
console.log("Valor encontrado en : "+t+" :"+valorReferencia);

//foreach
for(var e in miArreglo) //con in le decimos a nuestra funcion que SE DETENGA cuando encuentre con  un valor null en el arreglo
{
 console.log(miArreglo[e])
 miArreglo[e] = -1;  //con esto reemplazas todos los valores de este vector por -1
}
console.log(miArreglo);

//Variable que se puede usar en cualquier funcion
}
);

var cadena = "Soy global";
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Septima funcion para alertas
$("#misAlerts").click(
function misAlerts(){
//Enviar la alerta
alert("Hola... " +cadena);
});

//Variable global objeto

var persona = [{  //Definiendo arreglo de objetos
// INDICE 0
nombre : "Juan",
//Atributos definido por llave : valor
edad : 25,
colorDeOjos : "verde"
}, {
// INDICE 1
nombre : "Juan",
//Atributos definido por llave : valor
edad : 25,
colorDeOjos : "verde"
}, {
// INDICE 2
nombre : "Juan",
//Atributos definido por llave : valor
edad : 25,
colorDeOjos : "verde"
}]

//Variable 2 global linkin
var linkin = {
nombre: "Linkin Park",
all: 1997,
genero: "Numetal",
albums: 8,
bestseller: "Meteora"
}
//Variable 3 global playst
var playst = {
nombre: "Play station",
año: 1997,
genero: "Numetal",
albums: 8,
bestseller: "Meteora"
}
//Variable 4 global
var linkin2 = {
color: "Negro, Blanco, Plata",
año: 2017,
precio: 699,
carga: "Inalambrica",
camara: "12Mpxs"
}

//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
$("#objeto").click(
function manejarObjeto(){
/*console.log(Object.keys(persona)); //Esta funcion trae todas las llaves del objeto persona
console.log(Object.keys(linkin));
var dinamico="colorDeOjos";//Buscar valor
var dinamico2= "RH";
console.log(persona);
console.log(persona.nombre); //Buscar por atributo
console.log(persona["nombre"]); //Buscar por variable
console.log(persona/*Objeto*///[dinamico]/*llave*/);  //Si lo quieres hacer de este modo es necesario definir tu llave en esta funcion
//console.error(persona[dinamico2]); //Falla devido a que el valor no esta definido en una llave de persona
//console.log(linkin.all);

var colo = "colorDeOjos";
console.log(persona);
console.log(persona[1]); //Indice 1 la persona que buscabamos
console.log(persona[1].colorDeOjos); // El . da accseso a atributos y metodos del objeto
console.log(persona[1][colo])//Con comillas buscas texto no variable que se llame asi porque no existe
//Para la instruccion anterior es necesario definir una variable en la funcion

for(var valorInicial= 0; valorInicial<persona.length; valorInicial++) //Metodos de js para persona = persona.length
{
  console.log(persona [valorInicial][colo]);
}
});

//---------------------------------------------------------------------------------------------
});
