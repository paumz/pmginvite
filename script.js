// EDITA ÚNICAMENTE ESTE OBJETO cuando recibas los datos definitivos.
const evento = {
  tipo: 'Nuestra Primera Comunión', // O: 'Mi Confirmación'
  frase: 'Que la luz de Dios ilumine siempre nuestros corazones y guíe nuestros pasos.',
  nombres: ['Danna', 'Didianne'],
  mensaje: 'Con mucha alegría, queremos compartir contigo este día tan especial para nuestra familia.',
  padres: ['Nombre de los padres'],
  padrinos: ['Nombre del padrino', 'Nombre de la madrina'],
  fecha: '[Día, mes y año]',
  hora: '[Hora de la ceremonia]',
  iglesia: '[Nombre de la iglesia]',
  direccionIglesia: '[Dirección de la iglesia]',
  mapaIglesia: '', // Pega aquí la URL de Google Maps; vacío oculta el enlace.
  recepcion: '[Nombre del lugar]',
  direccionRecepcion: '[Dirección de la recepción]',
  mapaRecepcion: '',
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

const fechaBoda = new Date("2027-01-01T12:00:00");

actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);
