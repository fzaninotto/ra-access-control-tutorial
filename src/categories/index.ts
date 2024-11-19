import ClassIcon from "@mui/icons-material/Class";

import { CategoryList } from "./CategoryList";
import { CategoryShow } from "./CategoryShow";
import { CategoryEdit } from "./CategoryEdit";
import { CategoryCreate } from "./CategoryCreate";

export default {
  list: CategoryList,
  show: CategoryShow,
  edit: CategoryEdit,
  create: CategoryCreate,
  icon: ClassIcon,
  recordRepresentation: "name",
};
