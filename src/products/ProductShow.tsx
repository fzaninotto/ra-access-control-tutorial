import { Show, NumberField, SimpleShowLayout, TextField } from "react-admin";
import { Stack } from "@mui/material";

export const ProductShow = () => (
  <Show>
    <SimpleShowLayout sx={{ maxWidth: 500 }}>
      <TextField source="reference" />
      <Stack direction="row" gap={1}>
        <NumberField source="price" />
        <NumberField source="width" />
        <NumberField source="height" />
      </Stack>
      <TextField source="thumbnail" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
