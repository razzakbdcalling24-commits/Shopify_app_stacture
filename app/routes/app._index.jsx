
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import {Page, Grid, LegacyCard} from '@shopify/polaris';

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};


export default function Index() {
 

  return (
   <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Sales" sectioned>
            <p>View a summary of your online store’s sales.</p>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>
        </Grid.Cell>
      </Grid>
    </Page>
          
  );

}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
