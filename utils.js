// CONSTANTES GLOBALES
const HOY = new Date(2026, 3, 2); // 2 de Abril 2026
let fechaNavegacion = new Date(2026, 3, 1);

// Utilidades DOM
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Guardar/Leer LocalStorage
const storage = {
    set(key, data) {
        localStorage.setItem(`gomi_${key}_v8`, JSON.stringify(data));
    },
    get(key, defaultValue = []) {
        return JSON.parse(localStorage.getItem(`gomi_${key}_v8`) || JSON.stringify(defaultValue));
    },
    remove(key) {
        localStorage.removeItem(`gomi_${key}_v8`);
    }
};

// Formatear fechas
const formatDate = (date, options = { day: 'numeric', month: 'long' }) => {
    return date.toLocaleDateString('es-ES', options);
};

// Calcular días entre fechas
const daysBetween = (date1, date2) => {
    const diffMs = date2 - date1;
}