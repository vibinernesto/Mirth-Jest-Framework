// test data for mirth code funtionality 
// purpose -- mapping OBr.2.1 to PID.2.1
//import mapPidToAccessionNumber from '../MirthCode/mapPidToAccessionNumber.js';

function mapPidToAccessionNumber(incomingFile,pid){
  var msg = JSON.parse(incomingFile);
  msg.HL7Message.OBR["OBR.2"] = {"OBR.2.1":msg.HL7Message.PID["PID.2"]["PID.2.1"].toString()};
  return JSON.stringify(msg);
}

describe("Maping Function",()=>{
    test("pid 2 should be mapped to obr.2",()=>{
        var input         = require('./sampleFiles/inputSampleJson.json');
        var intermediate  = JSON.stringify(input);
        var output        = require('./sampleFiles/outputSampleJson.json');
  	    var outputFinal   = JSON.stringify(output);
        expect(mapPidToAccessionNumber(intermediate,"123456")).toEqual(outputFinal);
    });
});