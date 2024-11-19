import { ProductList } from "./ProductList";
import { ProductEdit } from "./ProductEdit";
import { ProductCreate } from "./ProductCreate";
import { ProductShow } from "./ProductShow";
import PhotoIcon from "@mui/icons-material/Photo";

export default {
  list: ProductList,
  show: ProductShow,
  edit: ProductEdit,
  create: ProductCreate,
  recordRepresentation: "reference",
  icon: PhotoIcon,
  options: { label: "Poster |||| Posters" },
};
