
// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import OracleEXADATAX82 from "layouts/Oracle-EXADATA-X8-2";
import ShipperGateway from "layouts/ShipperGateway";
import TSODatabase from "layouts/TSODatabase";
import NetBackup from "layouts/NetBackup";
import LoadBalance from "layouts/LoadBalance";
import NAS from "layouts/Nas";
import Databse from "assets/images/small-logos/database.png";
import Oracle from "assets/images/small-logos/oracle.png";
import SQL from "assets/images/small-logos/sql.png";
import loadbalanceimg from "assets/images/small-logos/loadbalance.png";
import NASIMG from "assets/images/small-logos/nas.png";
import Gateway from "assets/images/small-logos/gateway.png";
import Backup from "assets/images/small-logos/backup.png";
import Switch from "assets/images/small-logos/switch.png";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Views  from "layouts/views";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  { type: "title", title: "System TSO", key: "System TSO" },
  {
    type: "route",
    name: "Switch and Firewall",
    key: "dashboard",
    route: "/dashboard",
    icon: (
      <ArgonBox component="img" width={24} height={24} src={Switch} />
    ),
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Shipper Gateway",
    key: "ShipperGateway",
    route: "/ShipperGateway",
    icon: (
      <ArgonBox component="img" width={24} height={24} src={Gateway} />
    ),
    component: <ShipperGateway />,
  },
  {
    type: "route",
    name: "Load Balancer",
    key: "LoadBalance",
    route: "/LoadBalance",
    icon: (
      <ArgonBox component="img" width={23} height={23} src={loadbalanceimg} />
    ),
    component: <LoadBalance />,
  },
  {
    type: "route",
    name: "Nas",
    key: "NAS",
    route: "/NAS",
    icon: (
      <ArgonBox component="img" width={23} height={23} src={NASIMG} />
    ),
    component: <NAS />,
  },
  {
    type: "route",
    name: "Oracle Exadata X8-2",
    key: "Oracle-EXADATA-X8-2",
    route: "/Oracle-EXADATA-X8-2",
    icon: (
      <ArgonBox component="img" width={25} height={25} src={Oracle} />
    ),
    component: <OracleEXADATAX82 />,
  },
  {
    type: "route",
    name: "TSO DataBase",
    key: "TSODatabase",
    route: "/TSODatabase",
    icon: (
      <ArgonBox component="img" width={22} height={22} src={SQL} />
    ),
    component: <TSODatabase />,
  },
  {
    type: "route",
    name: "Net Backup",
    key: "NetBackup",
    route: "/NetBackup",
    icon: (
    <ArgonBox component="img" width={24} height={24} src={Backup} />
    ),
    component: <NetBackup />,
  },
  {
    type: "route",
    route: "/views",
    component: <Views />,
  },
/*   {
    type: "route",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: (
    <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />
    ),
    component: <Billing />,
  },
  {
    type: "route",
    route: "/views",
    component: <Views />,
  },
  {
    type: "route",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <VirtualReality />,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  }, */
];

export default routes;
