import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { useEffect, useState } from "react";

export const links = () => [
  { rel: "preconnect", href: "https://cdn.shopify.com" },
  { rel: "stylesheet", href: polarisStyles },
];




export default function Root() { 

  const [ready, setReady] = useState(false);

  useEffect(() => {
    // CSS load হওয়ার জন্য short delay
    const timer = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timer);
  }, []);


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />     
        <Meta />
        <Links />

      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}