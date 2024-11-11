const ListServerOC = [
    {SwitchFirewall:{MangementIP: "10.104.237.3", ServerName: "EFPSRouter", NodeType:"Network Switch"}},
    {SwitchFirewall:{MangementIP: "10.104.239.6", ServerName: "PMIS EXADATA Switch", NodeType:"Network Switch", Brand:"CiscoC3750E"}},
    {SwitchFirewall:{MangementIP: "10.104.237.26", ServerName: "PMISDC-OC-CISCO-N9K-01", NodeType:"Network Switch",Brand:"CiscoNexus9000"}},
    {SwitchFirewall:{MangementIP: "10.104.237.27", ServerName: "PMISDC-OC-CISCO-N9K-02", NodeType:"Network Switch",Brand:"CiscoNexus9000"}},
    {SwitchFirewall:{MangementIP: "10.104.237.28", ServerName: "PMISDC-OC-CISCO-N9K-03", NodeType:"Network Switch",Brand:"CiscoNexus9000"}},
    {SwitchFirewall:{MangementIP: "10.104.239.60", ServerName: "PMIS MGT Switch", NodeType:"Network Switch", Brand:"Cisco"}},
    {SwitchFirewall:{MangementIP:"10.104.237.37", ServerName:"Checkpoint Firewall Management", NodeType:"Firewall", Brand:"Checkpoint"}},
    {SwitchFirewall:{MangementIP:"10.104.237.38", ServerName:"Checkpoint Firewall Node 1", NodeType:"Firewall", Brand:"Checkpoint"}},
    {SwitchFirewall:{MangementIP:"10.104.237.39", ServerName:"Checkpoint Firewall Node 2", NodeType:"Firewall", Brand:"Checkpoint"}},
    {SwitchFirewall:{MangementIP:"10.104.237.40", ServerName:"DMZ Juniper Network Switch 1", NodeType:"Network Switch", Brand:"Juniper"}},
    {SwitchFirewall:{MangementIP:"10.104.237.41", ServerName:"DMZ Juniper Network Switch 2", NodeType:"Network Switch", Brand:"Juniper"}},
    {SwitchFirewall:{MangementIP:"1.2.3.4", ServerName:"XXXXXXXXXXXXXXXX", NodeType:"XXXXXXXXXXXXXXX", Brand:"Juniper"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.201", ServerName: "Database node 1 (NET0)", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.202", ServerName: "Database node 2 (NET0)", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.203", ServerName: "Storage Cell 1 (NET0)", NodeType:"Storage"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.204", ServerName: "Storage Cell 2 (NET0)", NodeType:"Storage"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.205", ServerName: "Storage Cell 3 (NET0)", NodeType:"Storage"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.211", ServerName: "Cisco Management switch", NodeType:"Network Switch"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.212", ServerName: "Infiniband 1", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.213", ServerName: "Infiniband 2", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.214", ServerName: "PDUA", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.215", ServerName: "PDUB", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.216", ServerName: "EM Server", NodeType:"Server"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.217", ServerName: "EM Server (ILOM)", NodeType:"Server"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.218", ServerName: "Platinum Gateway (ILOM)", NodeType:"Gateway"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.206", ServerName: "Database node 1 (ILOM)", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.207", ServerName: "Database node 2 (ILOM)", NodeType:"Database"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.208", ServerName: "Storage Cell 1 (ILOM)", NodeType:"Storage"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.209", ServerName: "Storage Cell 2 (ILOM)", NodeType:"Storage"}},
    {OracleEXADATAX82:{MangementIP: "10.104.237.210", ServerName: "Storage Cell 3 (ILOM)", NodeType:"Storage"}},
    {Loadbalancer:{MangementIP:"10.104.237.75", ServerName:"F5 BIG-IP Load Balancer Node 1", NodeType:"Load Balancer"}},
    {Loadbalancer:{MangementIP:"10.104.237.76", ServerName:"F5 BIG-IP Load Balancer Node 2", NodeType:"Load Balancer"}},
    {NAS:{MangementIP:"10.104.237.95", ServerName:"DELL EMC UNITY 300", NodeType:"Nas Networks"}},
    {ShipperGateway:{MangementIP:"10.104.237.97",ServerName:"Shipper Gateway Node 1", NodeType:"Shipper Gateway"}},
    {ShipperGateway:{MangementIP:"10.104.237.98",ServerName:"Shipper Gateway Node 2", NodeType:"Shipper Gateway"}},
    {ShipperGateway:{MangementIP:"10.104.237.99",ServerName:"Shipper Monitoring Server 1", NodeType:"Shipper Gateway"}},
    {ShipperGateway:{MangementIP:"10.104.237.100",ServerName:"Shipper Gateway Experimental Server", NodeType:"Shipper Gateway"}},
    {ShipperGateway:{MangementIP:"10.104.237.193",ServerName:"Shipper Monitoring Server 2", NodeType:"Shipper Gateway"}},
    {TSODatabase:{MangementIP:"10.104.237.101",ServerName:"Data Integration Server", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.101",ServerName:"Data Visualizer Server", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.102",ServerName:"RDBMS Repository Server", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.102",ServerName:"HDFS Repository Server", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.181",ServerName:"PMIS-NN01", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.182",ServerName:"PMIS-NN02", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.183",ServerName:"PMIS-CDH01", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.184",ServerName:"PMIS-DN01", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.185",ServerName:"PMIS-DN02", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.186",ServerName:"PMIS-DN03", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.188",ServerName:"PMIS-IIS01", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.190",ServerName:"PMIS-IIS02", NodeType:"Database"}},
    {TSODatabase:{MangementIP:"10.104.237.191",ServerName:"Network Switch", NodeType:"Network Switch"}},
    {TSODatabase:{MangementIP:"10.104.237.192",ServerName:"Network Switch", NodeType:"Network Switch"}},
    {NetBackup:{MangementIP:"10.104.237.85",ServerName:"Oracle X4-2 NBU01 (ILOM)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.86",ServerName:"Oracle X4-2 NBU01 (OS)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.92",ServerName:"Oracle X4-2 NBU02 (ILOM)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.93",ServerName:"Oracle X4-2 NBU02 (OS)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.89",ServerName:"BROCADE SAN Switch 300 Node 1", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.90",ServerName:"BROCADE SAN Switch 300 Node 2", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.81",ServerName:"Oracle Storage ZS5-2 Controller 1 (ILOM)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.82",ServerName:"Oracle Storage ZS5-2 Controller 1 (NET0)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.83",ServerName:"Oracle Storage ZS5-2 Controller 2 (ILOM)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.84",ServerName:"Oracle Storage ZS5-2 Controller 2 (NET0)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.21",ServerName:"Oracle Storage ZFS 7320 Controller 1", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.22",ServerName:"Oracle Storage ZFS 7320 Controller 2", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.103",ServerName:"Oracle Storage ZFS 7320 Controller 1 (ILOM)", NodeType:"Database"}},
    {NetBackup:{MangementIP:"10.104.237.104",ServerName:"Oracle Storage ZFS 7320 Controller 2 (ILOM)", NodeType:"Database"}},
  ];
  module.exports = ListServerOC;