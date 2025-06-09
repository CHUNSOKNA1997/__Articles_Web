import "./bootstrap";
import "../css/app.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout/Layout";

createInertiaApp({
    title: (title) => `${title} - KrummukV2`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        if (props.toast) {
            const { message, type } = props.toast;
            if (type === "success") {
                toast.success(message);
            } else if (type === "error") {
                toast.error(message);
            }
        }

        createRoot(el).render(
            <>
                <App {...props} />
                <ToastContainer />
            </>
        );
    },
});
