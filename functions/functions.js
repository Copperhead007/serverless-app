exoorts.handler = async function(event){
    console.log("request:", JSON.stringify(event));

    return
}
const sendRes = (status,body) => {
    var response = {
        statusCode: status,
        headers: {
            "Content-Type": "text/html",
        },
        body : body,
    };
    return response;
}
/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const response_1 = require("./tools/response");
const { HELLO_TABLE_NAME } = process.env;
const dynamoClient = new aws_sdk_1.DynamoDB.DocumentClient();
async function getItems(params) {
    try {
        return await dynamoClient.query(params).promise();
    }
    catch (err) {
        return err;
    }
}
exports.handler = async function (event) {
    console.log("request:", JSON.stringify(event));
    if (event.pathParameters === null) {
        return response_1.apiGatewayResponse(500, "Get not Complete, No id given");
    }
    //const id = event.pathParameters.id;
    const params = {
        TableName: HELLO_TABLE_NAME,
        KeyConditionExpression: "#87ea0 = :87ea0",
        ExpressionAttributeValues: {
          ":87ea0": id,
        },
        ExpressionAttributeNames: {
          "#87ea0": "userName",
        },
        
    };
    try {
        const data = await getItems(params);
        return response_1.apiGatewayResponse(200, data.Items);
    }
    catch (err) {
        return response_1.apiGatewayResponse(500, err);
    }
};*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBQ25DLCtDQUFzRDtBQUd0RCxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3pDLE1BQU0sWUFBWSxHQUFHLElBQUksa0JBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVuRCxLQUFLLFVBQVUsUUFBUSxDQUFDLE1BQTBDO0lBQ2hFLElBQUk7UUFDRixPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuRDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssV0FBVyxLQUFzQjtJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtRQUNqQyxPQUFPLDZCQUFrQixDQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0tBQ2pFO0lBQ0QscUNBQXFDO0lBRXJDLE1BQU0sTUFBTSxHQUF1QztRQUNqRCxTQUFTLEVBQUUsZ0JBQWlCO1FBQzVCOzs7Ozs7OztVQVFFO0tBQ0gsQ0FBQztJQUVGLElBQUk7UUFDRixNQUFNLElBQUksR0FBOEMsTUFBTSxRQUFRLENBQ3BFLE1BQU0sQ0FDUCxDQUFDO1FBQ0YsT0FBTyw2QkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLDZCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcclxuaW1wb3J0IHsgYXBpR2F0ZXdheVJlc3BvbnNlIH0gZnJvbSBcIi4vdG9vbHMvcmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgQVBJR2F0ZXdheUV2ZW50IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuXHJcbmNvbnN0IHsgSEVMTE9fVEFCTEVfTkFNRSB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IGR5bmFtb0NsaWVudCA9IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SXRlbXMocGFyYW1zOiBEeW5hbW9EQi5Eb2N1bWVudENsaWVudC5RdWVyeUlucHV0KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBkeW5hbW9DbGllbnQucXVlcnkocGFyYW1zKS5wcm9taXNlKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBBUElHYXRld2F5RXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcInJlcXVlc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XHJcbiAgaWYgKGV2ZW50LnBhdGhQYXJhbWV0ZXJzID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gYXBpR2F0ZXdheVJlc3BvbnNlKDUwMCwgXCJHZXQgbm90IENvbXBsZXRlLCBObyBpZCBnaXZlblwiKTtcclxuICB9XHJcbiAgLy9jb25zdCBpZCA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzLmlkO1xyXG5cclxuICBjb25zdCBwYXJhbXM6IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50LlF1ZXJ5SW5wdXQgPSB7XHJcbiAgICBUYWJsZU5hbWU6IEhFTExPX1RBQkxFX05BTUUhXHJcbiAgICAvKixcclxuICAgIEtleUNvbmRpdGlvbkV4cHJlc3Npb246IFwiIzg3ZWEwID0gOjg3ZWEwXCIsXHJcbiAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XHJcbiAgICAgIFwiOjg3ZWEwXCI6IGlkLFxyXG4gICAgfSxcclxuICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lczoge1xyXG4gICAgICBcIiM4N2VhMFwiOiBcInVzZXJOYW1lXCIsXHJcbiAgICB9LFxyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YTogRHluYW1vREIuRG9jdW1lbnRDbGllbnQuUXVlcnlPdXRwdXQgfCBhbnkgPSBhd2FpdCBnZXRJdGVtcyhcclxuICAgICAgcGFyYW1zXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGFwaUdhdGV3YXlSZXNwb25zZSgyMDAsIGRhdGEuSXRlbXMpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIGFwaUdhdGV3YXlSZXNwb25zZSg1MDAsIGVycik7XHJcbiAgfVxyXG59O1xyXG4iXX0=