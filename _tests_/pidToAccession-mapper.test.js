// test data for mirth code funtionality 
// purpose -- mapping OBr.2.1 to PID.2.1
const mapPidToAccessionNumber = require('../MirthCode/mapPidToAccessionNumber.js');

describe("Maping Function",()=>{
    test("pid 2 should be mapped to obr.2",()=>{
        var input         = require('./sampleFiles/inputSampleJson.json');
        var intermediate  = JSON.stringify(input);
        var output        = require('./sampleFiles/outputSampleJson.json');
  	    var outputFinal   = JSON.stringify(output);
        expect(mapPidToAccessionNumber(intermediate,"123456")).toEqual(outputFinal);
    });
});