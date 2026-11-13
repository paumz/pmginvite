// EDITA ÚNICAMENTE ESTE OBJETO cuando recibas los datos definitivos.
const evento = {
  tipo: 'Nuestra Primera Comunión', // O: 'Mi Confirmación'
  frase: 'Que la luz de Dios ilumine siempre nuestros corazones y guíe nuestros pasos.',
  nombres: ['Danna Paola', 'Didianne'],
  mensaje: 'Con mucha alegría, queremos compartir contigo este día tan especial para nuestra familia.',
  padres: ['Cynthia Paola Muñoz Gómez y Didier Daniel Vázquez Vargas'],
  padrinos: ['Gabriela Castelán Muñoz', 'Cecilia Castelán Muñoz'],
  fecha: '[16 de Enero de 2027]',
  hora: '[Hora de la ceremonia]',
  iglesia: '[Parroquia de San Antonio Abad]',
  direccionIglesia: '[B 16 de Sept. 10306, Arboledas de Loma Bella, 72474 Heroica Puebla de Zaragoza, Pue.]',
  mapaIglesia: 'https://maps.app.goo.gl/WdWBY2HYVBFEs2Vq8', 
  recepcion: '[Nombre del lugar]',
  direccionRecepcion: '[Calle 103 oriente no. 4 Arboledas de Loma Bella]',
  mapaRecepcion: 'https://maps.app.goo.gl/HTFUso5qixRQzbTL9',
  despedida: 'Que Dios bendiga cada paso de nuestras vidas.'
};

function ponerTexto(id, valor) {
  document.getElementById(id).textContent = valor;
}

function ponerMapa(id, url) {
  if (!url) return;
  const enlace = document.getElementById(id);
  try {
    const parsed = new URL(url);
    if (!['https:', 'http:'].includes(parsed.protocol)) return;
    enlace.href = parsed.href;
    enlace.hidden = false;
  } catch (_) { /* URL no válida: se mantiene oculto */ }
}

ponerTexto('tipoEvento', evento.tipo);
ponerTexto('frase', evento.frase);
ponerTexto('mensaje', evento.mensaje);
ponerTexto('padres', evento.padres.join('\n'));
ponerTexto('padrinos', evento.padrinos.join('\n'));
ponerTexto('fecha', evento.fecha);
ponerTexto('hora', evento.hora);
ponerTexto('iglesia', evento.iglesia);
ponerTexto('direccionIglesia', evento.direccionIglesia);
ponerTexto('recepcion', evento.recepcion);
ponerTexto('direccionRecepcion', evento.direccionRecepcion);
ponerTexto('despedida', evento.despedida);
ponerMapa('mapaIglesia', evento.mapaIglesia);
ponerMapa('mapaRecepcion', evento.mapaRecepcion);

const nombres = document.getElementById('nombres');
evento.nombres.forEach((nombre, i) => {
  if (i > 0) {
    const conjuncion = document.createElement('div');
    conjuncion.className = 'ampersand';
    conjuncion.textContent = 'y';
    nombres.append(conjuncion);
  }
  const elemento = document.createElement('div');
  elemento.className = 'name';
  elemento.textContent = nombre;
  nombres.append(elemento);
});

const fechaEvento = new Date("2027-01-01T12:00:00");

actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;
    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );
    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );
    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );
    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );
    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}
