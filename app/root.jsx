import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
// import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

// export const links = () => [
//   { rel: "preconnect", href: "https://cdn.shopify.com" },
//   { rel: "stylesheet", href: polarisStyles },
// ];

export default function Root() { 
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />     
        <Meta />
        <Links />
        
      <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css" />
        <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script> 

      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}