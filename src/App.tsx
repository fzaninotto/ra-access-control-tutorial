import { Admin, Resource, Layout, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";

import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import products from "./products";
import orders from "./orders";
import customers from "./customers";
import categories from "./categories";
import { MyMenu } from "./misc/Menu";
import { Logs } from "./misc/Logs";

const MyLayout = (props: any) => <Layout {...props} menu={MyMenu} />;

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={MyLayout}
  >
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
    <Resource name="categories" {...categories} />
    <CustomRoutes>
      <Route path="/logs" element={<Logs />} />
    </CustomRoutes>
  </Admin>
);
