import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
export const links = () => [
  { rel: "stylesheet", href: "https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css" },
];


export default function Root() { 



  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />     
        <Meta />
        <Links />
           <script type="module" src="https://cdn.jsdelivr.net/npm/@shopify/polaris-elements@latest/dist/polaris-elements/polaris-elements.esm.js"></script>
            <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css"/>
      </head>
      <body>
        <AppProvider i18n={translations}>
   <Outlet />
</AppProvider>
        <script 
          type="module" 
          src="https://cdn.jsdelivr.net/npm/@shopify/polaris-elements@latest/dist/polaris-elements/polaris-elements.esm.js"
        ></script>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}