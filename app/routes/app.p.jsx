import { Box, Card, Page, Text, BlockStack, Layout } from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function P() {
  return (
    <Card>dddddddddddd</Card>
  );
}