import { Box, Card, Page, Text, BlockStack, Layout } from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function P() {
  return (
    <Page>
      <ui-title-bar title="Additional Page" />
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                 The Page is Working Now
                </Text>
                <Text as="p" variant="bodyMd">
                  Wile be workin as soon as possiable.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}