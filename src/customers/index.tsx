import type { Customer } from "data-generator-retail";
import PeopleIcon from "@mui/icons-material/People";
import { ShowGuesser, EditGuesser } from "react-admin";

import { CustomerList } from "./CustomerList";

export default {
  list: CustomerList,
  show: ShowGuesser,
  edit: EditGuesser,
  icon: PeopleIcon,
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
};
