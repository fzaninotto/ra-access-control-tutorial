import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField source="customer_id" reference="customers" />
      <ArrayField source="basket">
        <Datagrid bulkActionButtons={false}>
          <ReferenceField source="product_id" reference="products" />
          <NumberField source="quantity" />
        </Datagrid>
      </ArrayField>
      <SimpleShowLayout direction="row" gap={1} sx={{ p: 0 }}>
        <NumberField
          source="total"
          options={{ style: "currency", currency: "USD" }}
          sx={{ fontWeight: "bold" }}
        />{" "}
        <NumberField
          source="total_ex_taxes"
          options={{ style: "currency", currency: "USD" }}
        />
        <NumberField
          source="delivery_fees"
          options={{ style: "currency", currency: "USD" }}
        />
        <NumberField source="tax_rate" options={{ style: "percent" }} />
        <NumberField
          source="taxes"
          options={{ style: "currency", currency: "USD" }}
        />
      </SimpleShowLayout>
      <TextField source="status" />
      <BooleanField source="returned" />
    </SimpleShowLayout>
  </Show>
);
