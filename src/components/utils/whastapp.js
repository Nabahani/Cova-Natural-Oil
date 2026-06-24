export function handleWhatsAppRedirect() {
    const phoneNumber = "2348061234574";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer'
    );
};