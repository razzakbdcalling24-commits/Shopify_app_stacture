
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import {
  Page,
  Grid,
  Card,
  Text,
  BlockStack,
  InlineStack,
  Button,
  Box,
  Badge
} from "@shopify/polaris";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};


export default function Index() {
 

  return (
<Page title="My Shop Dashboard" primaryAction={{ content: "Add Product" }}>
      <Grid>
        {/* বাম দিকের বড় কলাম */}
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 8 }}>
          <Card>
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <Text variant="headingMd" as="h2">Product Overview</Text>
                <Badge tone="success">Active</Badge>
              </InlineStack>
              
              <Text as="p">
                আপনার স্টোরের প্রোডাক্টগুলোর বর্তমান অবস্থা এখান থেকে ম্যানেজ করুন। 
                নিচের বাটনটি ব্যবহার করে নতুন প্রোডাক্ট যোগ করতে পারেন।
              </Text>

              <Box paddingBlockStart="200">
                <InlineStack gap="300">
                  <Button variant="primary" >View Products</Button>
                  <Button variant="tertiary">Export CSV</Button>
                </InlineStack>
              </Box>
            </BlockStack>
          </Card>
        </Grid.Cell>

        {/* ডান দিকের ছোট কলাম */}
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 2, lg: 4 }}>
          <Card>
            <BlockStack gap="200">
              <Text variant="headingMd" as="h2">Quick Stats</Text>
              <Box paddingBlockStart="200">
                <BlockStack gap="100">
                  <Text as="p">Total Orders: 120</Text>
                  <Text as="p">Total Sales: $4,500</Text>
                </BlockStack>
              </Box>
            </BlockStack>
          </Card>
        </Grid.Cell>
      </Grid>
    </Page>
  )
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
