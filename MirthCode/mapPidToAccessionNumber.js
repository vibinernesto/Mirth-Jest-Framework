// Only one field mapping -- Assiging value of OBR.2.1 to PID.2.1
export function mapPidToAccessionNumber(incomingFile,pid){
    var msg = JSON.parse(incomingFile);
    msg.HL7Message.OBR["OBR.2"] = {"OBR.2.1":msg.HL7Message.PID["PID.2"]["PID.2.1"].toString()};
    return JSON.stringify(msg);
}