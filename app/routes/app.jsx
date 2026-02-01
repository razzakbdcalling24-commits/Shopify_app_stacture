import { Outlet, useLoaderData } from "react-router";
import { NavMenu } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { AppProvider as ShopifyProvider } from "@shopify/shopify-app-react-router/react";
import { useEffect, useState } from "react";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  return (
 
      <ShopifyProvider embedded apiKey={apiKey}>
   
              <NavMenu>
                <a href="/app">Home</a>
                <a href="/app/p">Products</a>
                <a href="/app/additional">Additional</a>
              </NavMenu>

              <Outlet />
        
      
      </ShopifyProvider>
  
  );
}
