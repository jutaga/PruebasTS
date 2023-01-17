/* Enunciado Ejercicio 33:
Haz un relog que en tiempo real vaya mostrando La hora
a cada segundo.
Solo puedes usar el objeto date para
conseguir La hora por primera vez, pero no para
actualizar La hora.
Ejemplos:
 Let mi_relog = new Relog();
mi_relog.encender();
Ejemplos:
14:20:16
14:20:17
14:20:18
 */

function relojRapido() {
    setInterval(() => {
        const fecha: Date = new Date();
        const horas: number = fecha.getHours();
        const minutos: number = fecha.getMinutes();
        const segundos: number = fecha.getSeconds();

        console.log(`${horas}: ${minutos}: ${segundos}`);
    }, 1000)
}


relojRapido();