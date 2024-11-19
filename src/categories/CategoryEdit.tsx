import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
