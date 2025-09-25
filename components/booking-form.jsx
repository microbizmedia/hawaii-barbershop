/* First make sure that you have installed the package */

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookingFormButton() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "haircut" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <button
            data-cal-namespace="haircut"
            data-cal-link="johnny-the-barber/haircut"
            data-cal-config='{"layout":"month_view"}'
            className="btn-primary">
            TERMIN BUCHEN
        </button>
    )
};