import { handleWhatsAppRedirect } from "./utils/whastapp";

export default function WhatsAppButton() {

    return (
        <button className="btn btn-sm btn-success px-3 mt-2 me-2 custom-icon" style={{ backgroundClor: '#0aa743' }} onClick={handleWhatsAppRedirect}>Chat on WhatsApp <i className="bi bi-whatsapp ms-1"></i></button>
    );
}