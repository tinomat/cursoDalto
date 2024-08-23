/*  APIs
    Aplication programming interfaces, es una interfaz de programacion de aplicaciones, lo que hace es que recibe datos, los procesa y nos devuelve datos
    Las apis más comunes son las api res, como por ejemplo como las que se usan para las analytics
*/

// Objeto date
// Date es un constructor
const fecha = new Date();
// console.log(fecha.getDate()); //devuelve el día del mes (en este caso 19)
// console.log(fecha.getDay()); //nos devuelve el dia de la semana (hoy lunes muestra uno, osea es el segundo dia de la semana, arranca en domingo pero en programacion se cuenta desde 0)
// console.log(fecha.getMonth()); //devuelve el mes, estamos al mes 8 pero devuelve 7 porque arranca desde 0
// console.log(fecha.getYear()); //devuelve el año actual menos 1900, es decir hay que sumarle 1900 para que nos dé el año

// console.log(fecha.getHours()); //devuelve la hora (sin minutos)
// console.log(fecha.getMinutes()); //devuelve los minutos
// console.log(fecha.getSeconds()); //devuelve los segundos

// Reloj
// Como el Date() cuando los numeros son menores a 10 nos devuelve un solo digito lo que vamos a hacer crear una funcion para agregarles un 0
const addZeros = (n) => {
    // n va a va a valer el dato de tiempo
    // lo transformamos en string para asi poder acceder a .length
    // si la cantidad de caracteres es menor de 2 retorna "0" concatenado con n
    // sino retornamos el numero como tal
    if (n.toString().length < 2) return "0".concat(n);
    else return n;
};
const actualizarHora = () => {
    const time = new Date();
    // Hora va a valer
    const hora = addZeros(time.getHours());
    const min = addZeros(time.getMinutes());
    const seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = min;
    document.querySelector(".segundos").textContent = seg;
};
// Ejecutamos primero acá la funcion para que a la hora de que la pagina se cargue ya aparezca la hora y no esté 1 segundo sin mostrar nada hasta que comience el intervalo
actualizarHora();
// Establecemos un intervalo donde cada 1segundo se ejecuta actualizarHora
setInterval(actualizarHora, 1000);
