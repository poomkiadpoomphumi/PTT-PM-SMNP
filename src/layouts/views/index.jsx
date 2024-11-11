// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
// Billing page components
import BaseLayout from "layouts/views/components/BaseLayout";
import BillingInformation from "layouts/views/components/BillingInformation";
import Transactions from "layouts/views/components/Transactions";
import Cpu from "assets/images/small-logos/cpu.png";
import Temp from "assets/images/small-logos/temp.png";
import Ram from "assets/images/small-logos/ram.png";
import Fan from "assets/images/small-logos/Fan.svg";
import Card from "@mui/material/Card";
// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
// Argon Dashboard 2 MUI examples
import Table from "examples/Tables/Table";
import Invoice from "layouts/billing/components/Invoice";
// Data
import {Completion} from "layouts/tables/data/projectsTableData";
import { useSearchParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Views() {
  const [searchParams, setSearchParams] = useSearchParams();
  const Address = searchParams.get("address");
  const Brand = searchParams.get("servername");
  const [SerialNumber, setSerialNumber] = useState([]);
  const [Software, setSoftware] = useState([]);
  const [Version, setVersion] = useState([]);
  const [Inter, setInter] = useState([]);
  const [TotalMemory, setTotalMemory] = useState([]);
  const [Columns, setColumns] = useState([]);
  const [Rows, setRows] = useState([]);
  const [SystemUptime, setSystemUptime] = useState([]);
  const [UsedRMemory, setUsedRMemory] = useState([]);
  const [HostName, setHostName] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/viewSwitchFireWall",{
      Address : Address,
      Brand : Brand
    }).then((response) => {
        try {
          console.log(response.data)
          setUsedRMemory(response.data.UsedRMemory);
          setSerialNumber(response.data.SerialNumber);
          setSoftware(response.data.Software);
          setVersion(response.data.Version);
          setInter(response.data.Inter);
          setTotalMemory(response.data.TotalMemory);
          setSystemUptime(response.data.SystemUptime);
          setHostName(response.data.HostName);
          setColumns([
            { name: "Image", align: "left" },
            { name: "Processor", align: "left" },
            { name: "Status", align: "center" },
          ]);
          const data = [];
            data.push(
              {
                Image: [Cpu],
                Processor: (
                  <ArgonTypography variant="caption" color="text" fontWeight="medium">
                    CPU
                  </ArgonTypography>
                ),
                Status: <Completion value={response.data.CPUTotal5secRev} 
                countingunit="%"
                color={
                response.data.CPUTotal5secRev <= 25 ? "info":
                response.data.CPUTotal5secRev <= 45 ? "success":
                response.data.CPUTotal5secRev <= 50 ? "warning":"error"
              } />
              },
              {
                Image: [Temp],
                Processor: (
                  <ArgonTypography variant="caption" color="text" fontWeight="medium">
                    Temperature
                  </ArgonTypography>
                ),
                Status: <Completion value={response.data.Temperature} 
                countingunit="°C" 
                color={
                  response.data.Temperature <= 25 ? "info":
                  response.data.Temperature <= 45 ? "success":
                  response.data.Temperature <= 50 ? "warning":"error"
                } />
              },
              {
                Image: [Ram],
                Processor: (
                  <ArgonTypography variant="caption" color="text" fontWeight="medium">
                    Used Memory
                  </ArgonTypography>
                ),
                Status: <Completion value={response.data.UsedMemory} 
                countingunit="%" 
                color={
                  response.data.UsedMemory <= 25 ? "info":
                  response.data.UsedMemory <= 45 ? "success":
                  response.data.UsedMemory <= 55 ? "warning":"error"
                } />
              },
              {
                Image: [Ram],
                Processor: (
                  <ArgonTypography variant="caption" color="text" fontWeight="medium">
                    Free Memory
                  </ArgonTypography>
                ),
                Status: <Completion value={response.data.FreeMemory} 
                countingunit="%" 
                color={
                  response.data.FreeMemory <= 30 ? "error":
                  response.data.FreeMemory <= 50 ? "warning":
                  response.data.FreeMemory <= 60 ? "success":"info"
                } />
              },
              {
                Image: [Fan],
                Processor: (
                  <ArgonTypography variant="caption" color="text" fontWeight="medium">
                    Fan
                  </ArgonTypography>
                ),
                Status: (
                  <ArgonTypography variant="caption" color="text" fontWeight="medium">
                  {response.data.FanStatus}
                </ArgonTypography>
                ),
              },
              );
          setRows(data);
        } catch (error) {
          console.error(error);
        }
      }
    );
  });
  return (
    <BaseLayout stickyNavbar>
      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <ArgonBox
                  pt={2}
                  px={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ArgonTypography variant="h6" fontWeight="medium">
                    {Inter}
                  </ArgonTypography>
                </ArgonBox>
                <ArgonBox p={2}>
                  <ArgonBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                  >
                    <Invoice date="Host Name" id={HostName} />
                    <Invoice date="Software" id={Software} />
                    <Invoice date="Version" id={Version} />
                    <Invoice date="Serial number" id={SerialNumber} />
                    <Invoice date="Memory total" id={TotalMemory+"GB"} />
                    <Invoice date="Used memory" id={UsedRMemory+"GB"} />
                  </ArgonBox>
                </ArgonBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card>
                  <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                    <ArgonTypography variant="h6">System Uptime {SystemUptime}</ArgonTypography>
                  </ArgonBox>
                    <ArgonBox
                      sx={{
                        "& .MuiTableRow-root:not(:last-child)": {
                          "& td": {
                            borderBottom: ({
                              borders: { borderWidth, borderColor },
                            }) => `${borderWidth[1]} solid ${borderColor}`,
                          },
                        },
                      }}
                    >
                      <Table columns={Columns} rows={Rows} />
                    </ArgonBox>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ArgonBox>

{/*         <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </ArgonBox> */}
        
      </ArgonBox>
    </BaseLayout>
  );
}

export default Views;
