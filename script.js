
/*
 * LASGIRLS - CALENDARIO DE ADVIENTO
 *
 * Fecha de inicio: 1 de diciembre de 2026.
 * Una nueva casilla se desbloquea cada día a las 00:00.
 *
 * Para cambiar fotos o comentarios, modifica el objeto calendarDays.
 */

const YEAR = 2026;
const MONTH = 11; // Diciembre (enero = 0)
const IMAGE_FOLDER = "imagenes";

// --------------------------------------------------
// FECHA DE PRUEBA
// --------------------------------------------------

// Cambia esta fecha para simular cualquier día y hora.
// Usa null para volver a utilizar la fecha real del ordenador.
//
// Ejemplos:
// 1 diciembre, 00:00 -> new Date(2026, 11, 1, 0, 0, 0)
// 9 diciembre, 23:59:30 -> new Date(2026, 11, 9, 23, 59, 30)
// 10 diciembre, 00:00 -> new Date(2026, 11, 10, 0, 0, 0)
// 24 diciembre, 12:00 -> new Date(2026, 11, 24, 12, 0, 0)

const TEST_DATE = null;

// --------------------------------------------------
// FOTOS Y COMENTARIOS PERSONALIZADOS
// --------------------------------------------------

const calendarDays = [
    {
        day: 1,
        images: ["foto1.jpeg"],
        title: "Un comienzo especial",
        comment: "Quería empezar este calendario con mi foto favorita, nos vemos con la siguiente foto mañana."
    },
    {
        day: 2,
        images: ["foto2s.jpeg", "foto2v.jpeg"],
        title: "Dos versiones de un recuerdo",
        comment: "Hoy tocan no una 1 ni 2 si no 2 fotos que locura."
    },
    {
        day: 3,
        images: ["foto3.jpeg"],
        title: "Un recuerdo para guardar",
        comment: "Hay recuerdos bonitos que merecen recordarse pero el chapan ya es mítico. ♡"
    },
    {
        day: 4,
        images: ["foto4s.jpeg", "foto4v.jpeg"],
        title: "De esos días que se recuerdan",
        comment: "Bueno bueno, fotito en el bar de la Conchi y con Vane chismeando en la biblio que buenos días."
    },
    {
        day: 5,
        images: ["foto5.jpeg"],
        title: "Una pequeña dosis de felicidad",
        comment: "Me encanta dejar el móvil un segundo y ver que os hicisteis 5 fotos."
    },
    {
        day: 6,
        images: ["foto6.jpeg"],
        title: "Momentos que valen oro",
        comment: "Oye oye no puede faltar una foto grupal no?."
    },
    {
        day: 7,
        images: ["foto7.jpeg"],
        title: "Una sonrisa más",
        comment: "como prima settimana de fotos, es la última que tenemos antes de que os fueseis a Roma ."
    },
    {
        day: 8,
        images: ["foto8s.jpeg", "foto8v.jpeg"],
        title: "Un día para recordar",
        comment: "Otra cita con vosotras aunque una en el Bernabeu y otra en la biblio chismeando más."
    },
    {
        day: 9,
        images: ["foto9.jpeg"],
        title: "El mejor viaje",
        comment: "Las girlsss en Romaaa."
    },
    {
        day: 10,
        images: ["foto10.jpeg"],
        title: "Con gente bonita",
        comment: "Teneis un grupo muy bonito y no podía faltar una foto así."
    },
    {
        day: 11,
        images: ["foto11.jpeg"],
        title: "Ponte ponte que hacemos foto espejo",
        comment: "Oye buena foto espejo eh."
    },
    {
        day: 12,
        images: ["foto12s.jpeg", "foto12v.jpeg"],
        title: "Un recuerdo por partida doble",
        comment: "La de fotones que podeis hacer en vuestros espejos y no os sacais ni 1."
    },
    {
        day: 13,
        images: ["foto13.jpeg"],
        title: "Un poquito de nostalgia",
        comment: "La foto donde peor salimos, sí,  pero la que más nos representa también."
    },
    {
        day: 14,
        images: ["foto14.jpeg"],
        title: "Vuelta a los 2000",
        comment: "Como inicio de la segunda semana, yo creo que fué el dia que poco a poco fuimos siendo más amigos."
    },
    {
        day: 15,
        images: ["foto15s.jpeg", "foto15v.jpeg"],
        title: "Un recuerdo muy nuestro",
        comment: "No tengo nada más que decir vaya 2 fotones."
    },
    {
        day: 16,
        images: ["foto16.jpeg"],
        title: "Pequeños grandes momentos",
        comment: "La de fotos que hacemos por no tener verguenza pero vaya fotón."
    },
    {
        day: 17,
        images: ["foto17.jpeg"],
        title: "Que nunca falten las fotos de fiesta",
        comment: "Este fué mi último dia en Roma."
    },
    {
        day: 18,
        images: ["foto18.jpeg"],
        title: "Como salis tan bien en todas",
        comment: "Si miro a mi izquierda un quesito, si miro a mi derecha otro quesito."
    },
    {
        day: 19,
        images: ["foto19.jpeg"],
        title: "Aunque no os guste, a mi si",
        comment: "Se que no os gusta nada esta foto, pero a mi si y agarraros lo que se viene estos últimos días."
    },
    {
        day: 20,
        images: ["foto20.jpeg"],
        title: "Casi llega la Navidad",
        comment: "Como no, si dejo el móvil un segundo tengo fotos nuevas, es la costumbre que más me gusta."
    },
    {
        day: 21,
        images: ["foto21.jpeg"],
        title: "Mi cumpleee",
        comment: "No he puesto esta por lo que pensais pero es mi primera celebración de cumple con vosotras."
    },
    {
        day: 22,
        images: ["foto22s.jpeg", "foto22v.jpeg"],
        title: "Dos fotos para un gran recuerdo",
        comment: "Hoy el es último dia con 2 fotos, por eso puse mis favoritas, con Sara en Sevilla y con Vane haciendo el gilipollas una vez más."
    },
    {
        day: 23,
        images: ["foto23.jpeg"],
        title: "Ya casi estamos",
        comment: "Junto la foto del primer día, es una de mis favoritas, pero mañana vereis mi nueva foto favorita."
    },
    {
        day: 24,
        images: ["foto24.jpeg"],
        title: "Feliz Navidad ♡",
        comment: "Y llegamos al final. Espero que hayais disfrutado de cada recuerdo y que este pequeño calendario os haya sacado unas cuantas sonrisas. Gracias por todos los momentos compartidos. ¡Feliz Navidad! "
    }
];

// --------------------------------------------------
// ELEMENTOS DE LA PÁGINA
// --------------------------------------------------

const calendarElement = document.getElementById("calendar");
const calendarMessage = document.getElementById("calendar-message");

const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModalButton = document.getElementById("close-modal");

const modalDay = document.getElementById("modal-day");
const modalTitle = document.getElementById("modal-title");
const modalImages = document.getElementById("modal-images");
const modalComment = document.getElementById("modal-comment");

const previewButton = document.getElementById("preview-button");
const previewStatus = document.getElementById("preview-status");

let previewMode = false;

// --------------------------------------------------
// FECHA CENTRALIZADA
// --------------------------------------------------

function getCurrentDateTime() {
    return TEST_DATE || new Date();
}

// --------------------------------------------------
// FECHAS Y DESBLOQUEOS
// --------------------------------------------------

function getToday() {
    const now = getCurrentDateTime();

    return {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate()
    };
}

function isRealDayUnlocked(day) {
    const today = getToday();

    if (today.year > YEAR) return true;
    if (today.year < YEAR) return false;

    if (today.month > MONTH) return true;
    if (today.month < MONTH) return false;

    return today.day >= day;
}

function isDayUnlocked(day) {
    return previewMode || isRealDayUnlocked(day);
}

// --------------------------------------------------
// CREAR CALENDARIO
// --------------------------------------------------

function renderCalendar() {
    calendarElement.innerHTML = "";

    calendarDays.forEach((item) => {
        const unlocked = isDayUnlocked(item.day);

        const card = document.createElement("button");
        card.type = "button";

        card.className = "day-card";

        if (!unlocked) {
            card.classList.add("locked");
            card.disabled = true;
        } else {
            card.classList.add("available");
        }

        card.innerHTML = `
            <span class="day-icon">${unlocked ? "♡" : "🔒"}</span>
            <span class="day-number">${String(item.day).padStart(2, "0")}</span>
            <span class="day-label">${unlocked ? "Abrir recuerdo" : "Próximamente"}</span>
        `;

        card.addEventListener("click", () => {
            if (isDayUnlocked(item.day)) {
                openDay(item.day);
            }
        });

        calendarElement.appendChild(card);
    });

    updateCalendarMessage();
}

function updateCalendarMessage() {
    if (previewMode) {
        calendarMessage.textContent =
            "Estás en modo vista previa. ¡Puedes abrir todos los recuerdos!";
        return;
    }

    const today = getToday();

    if (today.year < YEAR || (today.year === YEAR && today.month < MONTH)) {
        calendarMessage.textContent =
            "Todavía no ha llegado diciembre. La primera sorpresa te espera el día 1. ♡";
        return;
    }

    if (today.year === YEAR && today.month === MONTH) {
        if (today.day < 24) {
            calendarMessage.textContent =
                `¡Ya puedes abrir hasta el día ${today.day}! Mañana habrá una nueva sorpresa.`;
        } else {
            calendarMessage.textContent =
                "¡Habeis llegado al final del calendario! Feliz Navidad. ";
        }
        return;
    }

    calendarMessage.textContent =
        "¡Todos los recuerdos del calendario están disponibles!";
}

// --------------------------------------------------
// ABRIR UN RECUERDO
// --------------------------------------------------

function openDay(day) {
    const item = calendarDays.find((entry) => entry.day === day);

    if (!item || !isDayUnlocked(day)) return;

    modalDay.textContent = `DÍA ${String(day).padStart(2, "0")} · DICIEMBRE`;
    modalTitle.textContent = item.title;
    modalComment.textContent = item.comment;

    modalImages.innerHTML = "";
    modalImages.classList.toggle("single-image", item.images.length === 1);

    item.images.forEach((filename) => {
        const image = document.createElement("img");

        image.src = `${IMAGE_FOLDER}/${filename}`;
        image.alt = `Recuerdo del día ${day}`;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            image.alt = `No se ha podido cargar ${filename}`;
            image.style.display = "none";
            console.error(`No se encuentra la imagen: ${IMAGE_FOLDER}/${filename}`);
        });

        modalImages.appendChild(image);
    });

    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeModalButton.focus();
}

function closeModal() {
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

closeModalButton.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("visible")) {
        closeModal();
    }
});

// --------------------------------------------------
// CUENTA ATRÁS
// --------------------------------------------------

function getNextUnlockDate() {
    const now = getCurrentDateTime();
    const today = getToday();

    const startDate = new Date(YEAR, MONTH, 1, 0, 0, 0);

    if (now < startDate) {
        return startDate;
    }

    if (
        today.year === YEAR &&
        today.month === MONTH &&
        today.day < 24
    ) {
        return new Date(YEAR, MONTH, today.day + 1, 0, 0, 0);
    }

    return null;
}

function updateCountdown() {
    const title = document.getElementById("countdown-title");
    const description = document.getElementById("countdown-description");

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const now = getCurrentDateTime();
    const target = getNextUnlockDate();

    if (!target) {
        title.textContent = "¡Calendario completado!";
        description.textContent = "Los 24 recuerdos ya están disponibles. ";

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const difference = Math.max(0, target.getTime() - now.getTime());

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    if (now < new Date(YEAR, MONTH, 1)) {
        title.textContent = "La primera sorpresa está esperando";
        description.textContent = "La magia empieza el 1 de diciembre.";
    } else {
        title.textContent = "La próxima sorpresa está cerca";
        description.textContent = "Una nueva casilla se abrirá a medianoche.";
    }
}

// --------------------------------------------------
// MODO VISTA PREVIA
// --------------------------------------------------

previewButton.addEventListener("click", () => {
    previewMode = !previewMode;

    previewButton.textContent = previewMode
        ? "Desactivar vista previa"
        : "Activar vista previa";

    previewStatus.textContent = previewMode
        ? "Vista previa activada: puedes probar los 24 días."
        : "Vista previa desactivada: vuelven a aplicarse las fechas reales.";

    renderCalendar();
});

// --------------------------------------------------
// INICIO
// --------------------------------------------------

renderCalendar();
updateCountdown();

// Actualiza la cuenta atrás cada segundo.
setInterval(updateCountdown, 1000);

// Actualiza los días disponibles cada minuto.
setInterval(renderCalendar, 60 * 1000);
