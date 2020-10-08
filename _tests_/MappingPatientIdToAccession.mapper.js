function mapPidToAccessionNumber(incomingFile,pid){
    var msg = JSON.parse(incomingFile);
    msg['OBR']['OBR.2']['OBR.2.1'] = msg['PID']['PID.2']['PID.2.1'].toString()
}

// testing function
describe("Maping Function",()=>{
    test("pid 2 should be mapped to obr.2",()=>{
        // input
        const input = {
            "HL7Message" : {
              "MSH" : {
                "MSH.1" : "|",
                "MSH.2" : "^~\\&",
                "MSH.3" : {
                  "MSH.3.1" : "PA-A01"
                },
                "MSH.4" : {
                  "MSH.4.1" : "LABECW"
                },
                "MSH.5" : {
                  "MSH.5.1" : "LABADT"
                },
                "MSH.6" : {
                  "MSH.6.1" : "PA-A01"
                },
                "MSH.7" : {
                  "MSH.7.1" : 20201007004645
                },
                "MSH.8" : {
                  "MSH.8.1" : "Security"
                },
                "MSH.9" : {
                  "MSH.9.1" : "ORM",
                  "MSH.9.2" : "O01"
                },
                "MSH.10" : {
                  "MSH.10.1" : "MSG137776"
                },
                "MSH.11" : {
                  "MSH.11.1" : "T"
                },
                "MSH.12" : {
                  "MSH.12.1" : 2.3
                }
              },
              "EVN" : {
                "EVN.1" : null,
                "EVN.2" : {
                  "EVN.2.1" : 20201007004645
                }
              },
              "PID" : {
                "PID.1" : null,
                "PID.2" : {
                  "PID.2.1" : 123456
                },
                "PID.3" : {
                  "PID.3.1" : 7899009
                },
                "PID.4" : null,
                "PID.5" : {
                  "PID.5.1" : "Test",
                  "PID.5.2" : "Patient",
                  "PID.5.3" : null,
                  "PID.5.4" : null
                },
                "PID.6" : null,
                "PID.7" : {
                  "PID.7.1" : "1970-07-05 00:00:00.0"
                },
                "PID.8" : {
                  "PID.8.1" : "F"
                },
                "PID.9" : null,
                "PID.10" : null,
                "PID.11" : {
                  "PID.11.1" : "ABC Street",
                  "PID.11.2" : null,
                  "PID.11.3" : "AUBURN",
                  "PID.11.4" : "GA",
                  "PID.11.5" : 30011
                },
                "PID.12" : null,
                "PID.13" : {
                  "PID.13.1" : "123-999-0000"
                },
                "PID.14" : {
                  "PID.14.1" : "000-000-0000"
                },
                "PID.15" : null,
                "PID.16" : null,
                "PID.17" : null,
                "PID.18" : {
                  "PID.18.1" : 72926
                },
                "PID.19" : {
                  "PID.19.1" : 999999999
                },
                "PID.20" : null,
                "PID.21" : null,
                "PID.22" : null
              },
              "PV1" : {
                "PV1.1" : {
                  "PV1.1.1" : 1
                },
                "PV1.2" : null,
                "PV1.3" : null,
                "PV1.4" : {
                  "PV1.4.1" : "Physical"
                },
                "PV1.5" : null,
                "PV1.6" : null,
                "PV1.7" : {
                  "PV1.7.1" : null,
                  "PV1.7.2" : "Practise Physician, MD"
                },
                "PV1.8" : null,
                "PV1.9" : null,
                "PV1.10" : null,
                "PV1.11" : null,
                "PV1.12" : null,
                "PV1.13" : null,
                "PV1.14" : null,
                "PV1.15" : null,
                "PV1.16" : null,
                "PV1.17" : null,
                "PV1.18" : null,
                "PV1.19" : {
                  "PV1.19.1" : "EN9123900"
                },
                "PV1.20" : null,
                "PV1.21" : null,
                "PV1.22" : null,
                "PV1.23" : null,
                "PV1.24" : null,
                "PV1.25" : null,
                "PV1.26" : null,
                "PV1.27" : null,
                "PV1.28" : null,
                "PV1.29" : null,
                "PV1.30" : null,
                "PV1.31" : null,
                "PV1.32" : null,
                "PV1.33" : null,
                "PV1.34" : null,
                "PV1.35" : null,
                "PV1.36" : null,
                "PV1.37" : null,
                "PV1.38" : null,
                "PV1.39" : null,
                "PV1.40" : null,
                "PV1.41" : null,
                "PV1.42" : null,
                "PV1.43" : null,
                "PV1.44" : {
                  "PV1.44.1" : "2020-10-07 12:45:00.0"
                }
              },
              "OBR" : {
                "OBR.1" : {
                  "OBR.1.1" : 1
                },
                "OBR.2" : null,
                "OBR.3" : {
                  "OBR.3.1" : null,
                  "OBR.3.2" : "HNAM_RESULT"
                },
                "OBR.4" : {
                  "OBR.4.1" : "VITALSIGNS"
                },
                "OBR.5" : null,
                "OBR.6" : null,
                "OBR.7" : {
                  "OBR.7.1" : 20201007001400
                },
                "OBR.8" : null,
                "OBR.9" : null,
                "OBR.10" : null,
                "OBR.11" : null,
                "OBR.12" : null,
                "OBR.13" : null,
                "OBR.14" : null,
                "OBR.15" : null,
                "OBR.16" : {
                  "OBR.16.1" : 1647,
                  "OBR.16.2" : "Ordering",
                  "OBR.16.3" : "Physician",
                  "OBR.16.4" : null,
                  "OBR.16.5" : "RN",
                  "OBR.16.6" : "ER RN",
                  "OBR.16.7" : null,
                  "OBR.16.8" : null,
                  "OBR.16.9" : null,
                  "OBR.16.10" : "Personnel",
                  "OBR.16.11" : null,
                  "OBR.16.12" : null,
                  "OBR.16.13" : "Personnel Badge ID"
                },
                "OBR.17" : null,
                "OBR.18" : null,
                "OBR.19" : null,
                "OBR.20" : null,
                "OBR.21" : null,
                "OBR.22" : {
                  "OBR.22.1" : 20201007001542
                },
                "OBR.23" : null,
                "OBR.24" : null,
                "OBR.25" : {
                  "OBR.25.1" : "F"
                }
              }
            }
          };

        const output = {
            "HL7Message" : {
              "MSH" : {
                "MSH.1" : "|",
                "MSH.2" : "^~\\&",
                "MSH.3" : {
                  "MSH.3.1" : "PA-A01"
                },
                "MSH.4" : {
                  "MSH.4.1" : "LABECW"
                },
                "MSH.5" : {
                  "MSH.5.1" : "LABADT"
                },
                "MSH.6" : {
                  "MSH.6.1" : "PA-A01"
                },
                "MSH.7" : {
                  "MSH.7.1" : 20201007004645
                },
                "MSH.8" : {
                  "MSH.8.1" : "Security"
                },
                "MSH.9" : {
                  "MSH.9.1" : "ORM",
                  "MSH.9.2" : "O01"
                },
                "MSH.10" : {
                  "MSH.10.1" : "MSG137776"
                },
                "MSH.11" : {
                  "MSH.11.1" : "T"
                },
                "MSH.12" : {
                  "MSH.12.1" : 2.3
                }
              },
              "EVN" : {
                "EVN.1" : null,
                "EVN.2" : {
                  "EVN.2.1" : 20201007004645
                }
              },
              "PID" : {
                "PID.1" : null,
                "PID.2" : {
                  "PID.2.1" : 123456
                },
                "PID.3" : {
                  "PID.3.1" : 7899009
                },
                "PID.4" : null,
                "PID.5" : {
                  "PID.5.1" : "Test",
                  "PID.5.2" : "Patient",
                  "PID.5.3" : null,
                  "PID.5.4" : null
                },
                "PID.6" : null,
                "PID.7" : {
                  "PID.7.1" : "1970-07-05 00:00:00.0"
                },
                "PID.8" : {
                  "PID.8.1" : "F"
                },
                "PID.9" : null,
                "PID.10" : null,
                "PID.11" : {
                  "PID.11.1" : "ABC Street",
                  "PID.11.2" : null,
                  "PID.11.3" : "AUBURN",
                  "PID.11.4" : "GA",
                  "PID.11.5" : 30011
                },
                "PID.12" : null,
                "PID.13" : {
                  "PID.13.1" : "123-999-0000"
                },
                "PID.14" : {
                  "PID.14.1" : "000-000-0000"
                },
                "PID.15" : null,
                "PID.16" : null,
                "PID.17" : null,
                "PID.18" : {
                  "PID.18.1" : 72926
                },
                "PID.19" : {
                  "PID.19.1" : 999999999
                },
                "PID.20" : null,
                "PID.21" : null,
                "PID.22" : null
              },
              "PV1" : {
                "PV1.1" : {
                  "PV1.1.1" : 1
                },
                "PV1.2" : null,
                "PV1.3" : null,
                "PV1.4" : {
                  "PV1.4.1" : "Physical"
                },
                "PV1.5" : null,
                "PV1.6" : null,
                "PV1.7" : {
                  "PV1.7.1" : null,
                  "PV1.7.2" : "Practise Physician, MD"
                },
                "PV1.8" : null,
                "PV1.9" : null,
                "PV1.10" : null,
                "PV1.11" : null,
                "PV1.12" : null,
                "PV1.13" : null,
                "PV1.14" : null,
                "PV1.15" : null,
                "PV1.16" : null,
                "PV1.17" : null,
                "PV1.18" : null,
                "PV1.19" : {
                  "PV1.19.1" : "EN9123900"
                },
                "PV1.20" : null,
                "PV1.21" : null,
                "PV1.22" : null,
                "PV1.23" : null,
                "PV1.24" : null,
                "PV1.25" : null,
                "PV1.26" : null,
                "PV1.27" : null,
                "PV1.28" : null,
                "PV1.29" : null,
                "PV1.30" : null,
                "PV1.31" : null,
                "PV1.32" : null,
                "PV1.33" : null,
                "PV1.34" : null,
                "PV1.35" : null,
                "PV1.36" : null,
                "PV1.37" : null,
                "PV1.38" : null,
                "PV1.39" : null,
                "PV1.40" : null,
                "PV1.41" : null,
                "PV1.42" : null,
                "PV1.43" : null,
                "PV1.44" : {
                  "PV1.44.1" : "2020-10-07 12:45:00.0"
                }
              },
              "OBR" : {
                "OBR.1" : {
                  "OBR.1.1" : 1
                },
                "OBR.2" : {
                    "OBR.2.1":123456
                },
                "OBR.3" : {
                  "OBR.3.1" : null,
                  "OBR.3.2" : "HNAM_RESULT"
                },
                "OBR.4" : {
                  "OBR.4.1" : "VITALSIGNS"
                },
                "OBR.5" : null,
                "OBR.6" : null,
                "OBR.7" : {
                  "OBR.7.1" : 20201007001400
                },
                "OBR.8" : null,
                "OBR.9" : null,
                "OBR.10" : null,
                "OBR.11" : null,
                "OBR.12" : null,
                "OBR.13" : null,
                "OBR.14" : null,
                "OBR.15" : null,
                "OBR.16" : {
                  "OBR.16.1" : 1647,
                  "OBR.16.2" : "Ordering",
                  "OBR.16.3" : "Physician",
                  "OBR.16.4" : null,
                  "OBR.16.5" : "RN",
                  "OBR.16.6" : "ER RN",
                  "OBR.16.7" : null,
                  "OBR.16.8" : null,
                  "OBR.16.9" : null,
                  "OBR.16.10" : "Personnel",
                  "OBR.16.11" : null,
                  "OBR.16.12" : null,
                  "OBR.16.13" : "Personnel Badge ID"
                },
                "OBR.17" : null,
                "OBR.18" : null,
                "OBR.19" : null,
                "OBR.20" : null,
                "OBR.21" : null,
                "OBR.22" : {
                  "OBR.22.1" : 20201007001542
                },
                "OBR.23" : null,
                "OBR.24" : null,
                "OBR.25" : {
                  "OBR.25.1" : "F"
                }
              }
            }
          };

          expect(mapPidToAccessionNumber(input,"123456")).toEqual(output);

    });
});