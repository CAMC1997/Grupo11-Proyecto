const secciones = document.querySelectorAll(".nav-item");
const card = document.querySelectorAll(".card-dashboard");

// Define una función para mostrar la fecha, el día de la semana y la hora actual
function mostrarFechaHora() {
    // Obtén la referencia al elemento nav por su ID
    const fechaHoraNav = document.getElementById("navegador");

    // Crea un nuevo elemento de párrafo (por ejemplo) para mostrar la fecha, el día de la semana y la hora
    const fechaHoraElemento = document.createElement("p");

    // Obtiene la fecha y hora actual
    const fechaActual = new Date();

    // Obtiene el día de la semana actual como un número (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const numeroDiaSemana = fechaActual.getDay();

    // Array de nombres de días de la semana
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Obtiene las horas y los minutos actuales
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();

    // Formatea las horas y los minutos en un formato deseado
    const horaFormato = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    // Formatea la fecha y hora en un formato deseado, incluyendo el día de la semana
    const fechaHoraFormato = `${diasSemana[numeroDiaSemana]} ${fechaActual.toLocaleDateString()} ${horaFormato}`;

    // Configura el contenido del elemento de fecha y hora con la fecha, el día de la semana y la hora formateadas
    fechaHoraElemento.textContent = `${fechaHoraFormato}`;

    // Agrega un estilo CSS para cambiar el color del texto
    fechaHoraElemento.style.color = "white"; // Puedes cambiar "blue" al color deseado

    // Agrega el elemento de fecha y hora al elemento nav
    fechaHoraNav.appendChild(fechaHoraElemento);
}


// Funcion para cambiar de sección
secciones.forEach((seccion, i) => {
  seccion.addEventListener("click", () => {
    const hijo = seccion.children[0];
    hijo.classList.add("active");
    hijo.classList.remove("link-body-emphasis");
    secciones.forEach((seccion2) => {
      if (seccion2 !== seccion) {
        const hijo2 = seccion2.children[0];
        hijo2.classList.remove("active");
        hijo2.classList.add("link-body-emphasis");
      }
    });
    card.forEach((card, id) => {
      if (id == i) {
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });
  });
});

// Llama a la función para que se ejecute cuando sea necesario
//mostrarFechaHora();

const edit_btn = document.querySelectorAll(".edit-item");
const delete_btn = document.querySelectorAll(".delete-item");

edit_btn.forEach((i) => {
  i.addEventListener("click", () => {
    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
      console.log("click");
      const name = i.closest(".prueba-eliminar").querySelector(".name-value").textContent;
      /**
       * Gets the email value from the closest element with class "prueba-eliminar"
       * @param {HTMLElement} i - The element to start searching from
       * @returns {string} - The email value as a string
       */
      const email = i.closest(".prueba-eliminar").querySelector(".email-value").textContent;
      const placeholder_name = document.getElementById("recipient-name");
      const placeholder_email = document.getElementById("recipient-email");
      const save_btn = document.getElementById("save-edit");
      if (placeholder_name && placeholder_email) {
        placeholder_name.value = name;
        placeholder_email.value = email;
        save_btn.addEventListener("click", () => {
          i.closest(".prueba-eliminar").querySelector(".name-value").textContent = placeholder_name.value;
          i.closest(".prueba-eliminar").querySelector(".email-value").textContent = placeholder_email.value;
        });
      }
      console.log(name, email);
    }
  });
});

delete_btn.forEach((i) => {
  i.addEventListener("click", () => {
    i.closest(".prueba-eliminar").remove();
  });
});