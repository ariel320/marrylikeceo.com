import { permanentRedirect } from "next/navigation";

/** The event page lives at /free-live-event; keep old links working. */
const October27Page = () => permanentRedirect("/free-live-event");

export default October27Page;
