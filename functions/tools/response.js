"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGatewayResponse = void 0;
const CORS_HEADERS = { 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials':'*'};
function apiGatewayResponse(statusCode, body) {
    return {
        statusCode,
        headers: CORS_HEADERS,
        body: JSON.stringify(body),
    };
}
exports.apiGatewayResponse = apiGatewayResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFNLFlBQVksR0FBRyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSw2QkFBNkIsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNoRyxTQUFnQixrQkFBa0IsQ0FBQyxVQUFrQixFQUFFLElBQVM7SUFDNUQsT0FBTztRQUNILFVBQVU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDN0IsQ0FBQztBQUNOLENBQUM7QUFORCxnREFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eVJlc3VsdCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xyXG5cclxuY29uc3QgQ09SU19IRUFERVJTID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonIH07XHJcbmV4cG9ydCBmdW5jdGlvbiBhcGlHYXRld2F5UmVzcG9uc2Uoc3RhdHVzQ29kZTogbnVtYmVyLCBib2R5OiBhbnkpOiBBUElHYXRld2F5UHJveHlSZXN1bHQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlLFxyXG4gICAgICAgIGhlYWRlcnM6IENPUlNfSEVBREVSUyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgIH07XHJcbn0iXX0=