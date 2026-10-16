// Botón "Regístrate": envía el correo a Formspree sin recargar la página
const newsletter = document.getElementById('newsletter');
const newsletterMsg = document.getElementById('newsletterMsg');

newsletter.addEventListener('submit', async e => {
    e.preventDefault();
    newsletterMsg.textContent = 'Enviando…';
    try {
        const r = await fetch(newsletter.action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(newsletter)
        });
        if (!r.ok) throw new Error();
        newsletterMsg.textContent = '¡Listo! Te registraste correctamente.';
        newsletter.reset();
    } catch {
        newsletterMsg.textContent = 'No se pudo enviar. Revisa el ID de Formspree en el action del formulario.';
    }
});
