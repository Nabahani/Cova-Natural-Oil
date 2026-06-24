import { handleCall } from "./utils/call";

export default function PhoneCallButton() {

    return (
        <button
            className="btn btn-sm btn-primary px-3 mt-2 custom-icon"
            onClick={handleCall}
        >
            Call Now
            <i className="bi bi-telephone ms-2"></i>
        </button>
    );
}