import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router";
import { AppProvider as AppBridgeProvider } from "@shopify/shopify-app-react-router/react";
import { AppProvider as PolarisAppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { NavMenu } from "@shopify/app-bridge-react";
import { useMemo } from "react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  const shopifyRouter = useMemo(() => ({
    location,
    navigate: (to) => navigate(to),
  }), [location, navigate]);

  return (
    <PolarisAppProvider i18n={enTranslations}>
      <AppBridgeProvider
        i18n={enTranslations}
        isEmbeddedApp={true}
        apiKey={apiKey}
        router={shopifyRouter}
      >
        {/* Sidebar NavMenu */}
        <NavMenu>
          <a href="/app">Home</a>
          <a href="/app/p">Products</a>
          <a href="/app/orders">Orders</a>
        </NavMenu>

        <Outlet />
      </AppBridgeProvider>
    </PolarisAppProvider>
  );
}
