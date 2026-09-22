const lugares = {
  mina: { nombre: "Mina San Agustín", descripcion: "Zona seleccionada: Mina San Agustín.", imagen: "imagenes/mina.jpg" },
  simon: { nombre: "Simón Sarlata", descripcion: "Zona seleccionada: Simón Sarlata.", imagen: "imagenes/simon.jpg" },
  parque: { nombre: "Parque Ignacio", descripcion: "Zona seleccionada: Parque Ignacio.", imagen: "imagenes/parque.jpg" },
  casa: { nombre: "Casa", descripcion: "Zona seleccionada: Casa.", imagen: "imagenes/casa.jpg" }
};

const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo-modal");
const descripcion = document.getElementById("descripcion");
const imagenLugar = document.getElementById("imagenLugar");

function abrirUbicacion(id) {
  const lugar = lugares[id];
  if (!lugar) return;
  titulo.textContent = lugar.nombre;
  descripcion.textContent = lugar.descripcion;
  imagenLugar.src = lugar.imagen;
  imagenLugar.alt = `Imagen de ${lugar.nombre}`;
  modal.classList.remove("oculto");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  modal.classList.add("oculto");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-target]").forEach(elemento => {
  elemento.addEventListener("click", () => abrirUbicacion(elemento.dataset.target));
});

document.getElementById("cerrar").addEventListener("click", cerrarModal);
document.getElementById("regresar").addEventListener("click", cerrarModal);
modal.addEventListener("click", evento => { if (evento.target === modal) cerrarModal(); });
document.addEventListener("keydown", evento => { if (evento.key === "Escape") cerrarModal(); });
