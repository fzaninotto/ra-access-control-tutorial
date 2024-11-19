import { Menu, CanAccess } from "react-admin";
import SsidChartIcon from "@mui/icons-material/SsidChart";

export const MyMenu = () => (
  <Menu>
    <Menu.ResourceItems />
    <CanAccess resource="logs" action="read">
      <Menu.Item primaryText="Logs" to="/logs" leftIcon={<SsidChartIcon />} />
    </CanAccess>
  </Menu>
);
