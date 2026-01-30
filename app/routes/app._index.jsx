
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { Card, Page } from "@shopify/polaris";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};


export default function Index() {
 

  return (
    <Page>
           <Card>The App is Running </Card> 
    </Page>
          
  );

}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
