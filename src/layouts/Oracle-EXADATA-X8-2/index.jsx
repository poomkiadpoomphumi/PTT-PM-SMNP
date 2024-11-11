// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
// Argon Dashboard 2 MUI example components
import Table from "examples/Tables/Table";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import Footer from "examples/Footer";
// Data
//import authorsTableData from "layouts/tables/data/authorsTableData";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Author, Function } from "layouts/tables/data/authorsTableData";
import Oracle from "assets/images/small-logos/oracle.png";
import Cisco from "assets/images/small-logos/cisco.png";
import Gateway from "assets/images/small-logos/gateway.png";
import ArgonBadge from "components/ArgonBadge";
function Default() {
  const [Columns, setColumns] = useState([]);
  const [Rows, setRows] = useState([]);
  const [offline, setOffline]= useState([]);
  const [online, setOnline]= useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/getOracleExadata").then((response) => {
      console.log(response.data);
      setColumns([
        { name: "NodeSystem", align: "left" },
        { name: "NodeType", align: "left" },
        { name: "Status", align: "center" },
        { name: "Created", align: "center" },
        { name: "action", align: "center" },
      ]);
      const NetworkData = [];
      const dataOnline = [];
      const dataOffline = [];
      response.data.map((item) => {
        if(item.Status == 'online'){
          dataOnline.push(item.Status)
          setOnline(dataOnline)
        }else{
          dataOffline.push(item.Status)
          setOffline(dataOffline)
        }
        NetworkData.push({
          NodeSystem: (
            <Author 
            image={item.NodeType === 'Network Switch' ? Cisco:item.NodeType === 'Gateway'? Gateway:Oracle} 
            name={item.ServerName} 
            email={item.MangementIP} />
          ),
          NodeType: (<Function job={item.NodeType} />),
          Status: (
            <ArgonBadge 
            variant="gradient" 
            badgeContent={item.Status} 
            color={item.Status == 'online' ? 'success' : 'error'}
            size="xs" container />
          ),
          Created: (
            <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
              {item.Created}
            </ArgonTypography>
          ),
          action: (
            <ArgonTypography
              component="a"
              href="#"
              variant="caption"
              color="secondary"
              fontWeight="medium"
            >
              Views
            </ArgonTypography>
          ),
        });
      });
      setRows(NetworkData);
    });
  });
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Node Alive"
              count={online.length}
              icon={{
                color: "success",
                component: <i className="ni ni-tv-2" />,
              }}
              percentage={{ text: "Since Current" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Node Not-alive"
              count={offline.length}
              icon={{ color: "error", component: <i className="ni ni-tv-2" /> }}
              percentage={{ text: "Since Current" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Node Total"
              count={offline.length + online.length}
              icon={{ color: "primary", component: <i className="ni ni-money-coins" /> }}
              percentage={{text: "Since Current" }}
            />
          </Grid>
        </Grid>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <ArgonTypography variant="h6">Node Oracle Exadata X8-2</ArgonTypography>
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={Columns} rows={Rows} />
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
