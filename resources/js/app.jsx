import React from "react";
import "./bootstrap";
import "../css/app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import FrontLayout from "./Layout/FrontLayout";
import Index from "./Pages/Dashboard/Index";
import { ThemeProvider } from "./provider/theme-provider";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        // Set layout based on page path
        if (!page.default.layout) {
            if (name.startsWith("Dashboard/") || name === "Dashboard") {
                page.default.layout = (page) => <Index children={page} />;
            } else {
                page.default.layout = (page) => <FrontLayout children={page} />;
            }
        }

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider defaultTheme="system" storageKey="app-ui-theme">
                <App {...props} />
            </ThemeProvider>
        );
    },
});
