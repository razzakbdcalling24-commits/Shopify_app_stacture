
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { CalloutCard, Page } from "@shopify/polaris";



export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};



export default function Index() {
 

  return (
<Page
  title="The code is running "
>
       <CalloutCard
      title="Customize the style of your checkout"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      primaryAction={{
        content: 'Customize checkout',
        url: '#',
      }}
    >
      <p>Upload your store’s logo, change colors and fonts, and more.</p>
    </CalloutCard>
</Page>
  );

}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
