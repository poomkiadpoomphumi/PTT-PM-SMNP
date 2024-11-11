const snmp = require("net-snmp");
const express = require("express");
const cors = require("cors");
const server = express();
const net = require('net');
const ListServerOC = require('./serverData.jsx');
const oid = require('./oid.jsx');
server.use(express.Router());
server.use(cors());
server.use(express.json());
server.listen("8000", () => {
  console.log("Backend is listening on port 8000");
});
const DateTime = new Date().toLocaleString('en-GB', { hour24: false,});
const options = {
  port: 161,
  retries: 1,
  timeout: 1000,
  transport: "udp4",
  trapPort: 162,
  version: snmp.Version2c,
  backwardsGetNexts: true,
  reportOidMismatchErrors: false,
  idBitsSize: 32,
};

server.get("/getOracleExadata", (req, res) => {
  const OracleEXADATAX82 = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.OracleEXADATAX82 != undefined) OracleEXADATAX82.push(System.OracleEXADATAX82);
  })).then(()=>{
     Promise.all(OracleEXADATAX82.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(OracleEXADATAX82);
        }, 2100);
     })
  })
});
server.get("/getShipperGateway", (req, res) => {
  const ShipperGateway = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.ShipperGateway != undefined) ShipperGateway.push(System.ShipperGateway);
  })).then(()=>{
     Promise.all(ShipperGateway.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(ShipperGateway);
        }, 2100);
     })
  })
});
server.get("/getNetBackup", (req, res) => {
  const NetBackup = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.NetBackup != undefined) NetBackup.push(System.NetBackup);
  })).then(()=>{
     Promise.all(NetBackup.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(NetBackup);
        }, 2100);
     })
  })
});
server.get("/getSwitchFireWall", (req, res) => {
  const SwitchFireWall = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.SwitchFirewall != undefined) SwitchFireWall.push(System.SwitchFirewall);
  })).then(()=>{
     Promise.all(SwitchFireWall.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(SwitchFireWall);
        }, 2100);
     })
  })
});
server.get("/getNas", (req, res) => {
  const NAS = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.NAS != undefined) NAS.push(System.NAS);
  })).then(()=>{
     Promise.all(NAS.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(NAS);
        }, 2100);
     })
  })
});
server.get("/getLoadBalance", (req, res) => {
  const Loadbalancer = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.Loadbalancer != undefined) Loadbalancer.push(System.Loadbalancer);
  })).then(()=>{
     Promise.all(Loadbalancer.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(Loadbalancer);
        }, 2100);
     })
  })
});
server.get("/getTSODatabse", (req, res) => {
  const TSODatabase = [];
  Promise.all(ListServerOC.map(async(System) => {
    if(System.TSODatabase != undefined) TSODatabase.push(System.TSODatabase);
  })).then(()=>{
     Promise.all(TSODatabase.map(async(item) => {
      const Socket = new net.Socket();
      Socket.setTimeout(2100);
      PushConnectionStatus(item,Socket,item.MangementIP);
  })).then(() => {
    setTimeout(() => {
         res.send(TSODatabase);
        }, 2100);
     })
  })
});
const PushConnectionStatus = async (item,Socket,Address) => {
  let DataStatus = item;
  let DataDate = item;
  Socket.on('connect', function(e) {
    DataDate.Created = DateTime;
    DataStatus.Status = 'online';
    Socket.destroy();
  }).on('error', function(e) {
    DataDate.Created = DateTime;
    DataStatus.Status = e.code;
    Socket.destroy();
  }).on('timeout', function(e) {
    DataDate.Created = DateTime;
    DataStatus.Status = 'Timed out';
    Socket.destroy();
  }).connect(161, Address);
}
server.post("/CheckConnection/:Address", (req, res) => {
  try{
    const Address = req.params.Address;
    const Socket = new net.Socket();
    Socket.setTimeout(2000);
    Socket.on('connect', function(e) {
      res.send('success');
      Socket.destroy();
    }).on('error', function(e) {
      res.send('error');
      Socket.destroy();
    }).on('timeout', function(e) {
      res.send('error');
      Socket.destroy();
    }).connect(161, Address);
  } catch (error) {
    console.error(error);
  }
});
server.post("/viewSwitchFireWall", (req, res) => {
  try{
    const address = req.body.Address;
    const detail = req.body.Brand;
    switch(detail){
      case 'CiscoC3750E':
        getAgentData(address,detail,oid['cisco_C3750E']);
          setTimeout(() => {
            res.send(AGENT_DATA_SNMP);
          }, 1000);
        break;
      case 'CiscoNexus9000':
        getAgentData(address,detail,oid['cisco_NEXUS9000']);
        setTimeout(() => {
          res.send(AGENT_DATA_SNMP);
        }, 1000);
        break;
    }
  } catch (error) {
    console.error(error);
  }
});
/*****************************************
@varible Keep array CISCO DATA to Frontend 
*****************************************/
const AGENT_DATA_SNMP = {};
/*****************************************
@varible Keep array Convert Memory 
*****************************************/
const convert = {};
/*****************************************
@varible GigaByte
*****************************************/
const GB = 1048576;
/*****************************************
@varible Keep Get Data From Agent  
*****************************************/
const AgentData = {};
/********************************
  @timeticks / 100 = seconds
  @timeticks / 6000 = minutes
  @timeticks / 360000 = hours
  @timeticks / 8640000 = days
  @timeticks / 60480000 = weeks
*********************************/
const timeticksToWDhms = (timeUnix) => {
  const timeticks = parseInt(timeUnix);
  const days = Math.floor((timeticks % 60480000) / 8640000);
  const hours = Math.floor((timeticks % 8640000) / 360000);
  const minutes = Math.floor((timeticks % 360000) / 6000);
  const seconds = Math.floor((timeticks % 6000) / 100);
  const weeks = Math.floor(timeticks / 60480000);
  const w = weeks > 0 ? weeks + (weeks == 1 ? " week, " : " weeks, ") : "";
  const d = days > 0 ? days + (days == 1 ? " day, " : " days, ") : "";
  const m = minutes > 0 ? minutes + (minutes == 1 ? " minute, " : " minutes, ") : "";
  const s = seconds > 0 ? seconds + (seconds == 1 ? " second " : " seconds ") : "";
  const h = hours > 0 ? hours + (hours == 1 ? " hour, " : " hours, ") : "";
  return w + d + h + m + s;
  }
const KiloByteToGigaByte = (Used, Free) => { 
  const UsedM = parseInt(Used);
  const FreeM = parseInt(Free);
  convert.Total = Math.round((UsedM + FreeM) / GB);
  convert.FreeMemory = Math.round(parseInt(FreeM / GB));
  convert.UsedMemory = Math.round(parseInt(UsedM / GB));
  convert.UsedMemoryPersent = Math.round(parseInt((UsedM / GB  * 100) / convert.Total));
  convert.FreeMemoryPersent = Math.round(100 - (parseInt((UsedM / GB * 100) / convert.Total)));
  return convert;
}
const PushDataSnmpCisco = async (arr, detail) => {
  try{
    const SoftWare = arr[0].split(",");
    arr[7] == 1 ? AGENT_DATA_SNMP.FanStatus = "OK" :
    arr[7] == 2 ? AGENT_DATA_SNMP.FanStatus = "WARNING" :
    arr[7] == 3 ? AGENT_DATA_SNMP.FanStatus = "CRITICAL" :
    arr[7] == 4 ? AGENT_DATA_SNMP.FanStatus = "SHUTDOWN" :
    arr[7] == 5 ? AGENT_DATA_SNMP.FanStatus = "NOT PRESSENT" : "NOT FUNCTIONING";
    AGENT_DATA_SNMP.SerialNumber = arr[1];
    AGENT_DATA_SNMP.TotalMemory = KiloByteToGigaByte(arr[3],arr[4]).Total;
    AGENT_DATA_SNMP.UsedMemory = KiloByteToGigaByte(arr[3],arr[4]).UsedMemoryPersent;
    AGENT_DATA_SNMP.UsedRMemory = KiloByteToGigaByte(arr[3],arr[4]).UsedMemory;
    AGENT_DATA_SNMP.FreeMemory = KiloByteToGigaByte(arr[3],arr[4]).FreeMemoryPersent;
    AGENT_DATA_SNMP.Temperature = parseInt(arr[6]); //°C
    AGENT_DATA_SNMP.CPUTotal5secRev = parseInt(arr[2]);
    AGENT_DATA_SNMP.SystemUptime = timeticksToWDhms(arr[5]);
    AGENT_DATA_SNMP.HostName = arr[8];
    switch(detail){
      case 'CiscoC3750E':
        AGENT_DATA_SNMP.Software = SoftWare[1];
        AGENT_DATA_SNMP.Version = SoftWare[2];
      case 'CiscoNexus9000':
        AGENT_DATA_SNMP.Software = SoftWare[0];
        AGENT_DATA_SNMP.Version = SoftWare[1] + " " + SoftWare[2];
    }
  } catch (error) {
    console.error(error);
  }
}
const getAgentData = async (address,detail,oids) => {
  const session = snmp.createSession(address, "public", options);
      session.getNext(oids, function (error, varbinds) {
        if (error) {
          res.send('error');
        } else {
            for (var i = 0; i < varbinds.length; i++) {
              if (snmp.isVarbindError(varbinds[i])){
                res.send(snmp.varbindError(varbinds[i]));
              }else{
                AgentData[i] = varbinds[i].value.toString();
                PushDataSnmpCisco(AgentData, detail);
              }
            }
        }
        session.close ();
    });
}




/* const GetWalkFunction = (address,oidsWalk) => {
  try{
    const sessionWalk = snmp.createSession(address, "public", options);
    const doneCb = (error) => {
        if (error) console.error (error.toString ());
    }
    const feedCb = (varbinds) => {
        for (var i = 0; i < varbinds.length; i++) {
            if (snmp.isVarbindError (varbinds[i]))
               console.error (snmp.varbindError (varbinds[i]));
            else
                console.log (varbinds[i].oid + " => " + varbinds[i].value);
        }
    }
    const maxRepetitions = 20;
    sessionWalk.walk (oidsWalk, maxRepetitions, feedCb, doneCb);
  } catch (error) {
      console.error(error);
  }
}
GetWalkFunction("10.104.237.26","1.3.6.1.2.1.31.1.1.1.1");

const session = snmp.createSession ("10.104.237.28", "public", options);
const OID = [
  "1.3.6.1.2.1.1", //System
  "1.3.6.1.2.1.47.1.1.1.1.11.1", //Serial Number
  "1.3.6.1.4.1.9.9.109.1.1.1.1.6", //CPUTotal5secRev
  "1.3.6.1.4.1.9.9.109.1.1.1.1.12", //Used memory
  "1.3.6.1.4.1.9.9.109.1.1.1.1.13", //Free memory
  "1.3.6.1.2.1.1.3", //SystemUptime
  "1.3.6.1.4.1.9.9.91.1.1.1.1.4", //Temperature
  "1.3.6.1.4.1.9.9.13.1.4.1.3", //Status Fan Normal: 1 Warning: 2 Failed: 3-6
  "1.3.6.1.2.1.1.5", //Hostname
  "1.3.6.1.2.1.4.20", //IP Address
  "1.3.6.1.2.1.31.1.1.1.1"
];
session.getNext(OID, function (error, varbinds) {
  const AgentData = {};
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++) {
            if (snmp.isVarbindError (varbinds[i])) {
                console.error (snmp.varbindError (varbinds[i]));
            } else {
                AgentData[i] = varbinds[i].value.toString();
            }
        }
    }
    session.close ();
    console.log(AgentData);
}); */


/* const SwitchFireWall = [];
Promise.all(ListServerOC.map(async(System) => {
  if(System.SwitchFirewall != undefined) SwitchFireWall.push(System.SwitchFirewall);
})).then(() => {
  Promise.all(SwitchFireWall.map(async(item) => {
    const Socket = new net.Socket();
    Socket.setTimeout(2200);
    PushConnectionStatusTest(item,Socket,item.MangementIP);
  })).then(() => {
     setTimeout(() => {
        console.log(SwitchFireWall);
        }, 2100);
    }) 
});

const PushConnectionStatusTest = async (item,Socket,Address) => {
  let DataStatus = item;
  let DataDate = item;
    Socket.on('connect', function(err) {
      DataDate.Created = DateTime;
      DataStatus.Status = 'online';
      Socket.destroy();
      console.log(Address + ' is up.');
    }).on('error', function(err) {
      DataDate.Created = DateTime;
      DataStatus.Status = err.code;
      Socket.destroy();
      console.log(Address + ' ' + err.code);
    }).on('timeout', function(err) {
      DataDate.Created = DateTime;
      DataStatus.Status = 'Request timed out';
      Socket.destroy();
      console.log(Address + ' timed out');
    }).connect(161, Address);
} */



