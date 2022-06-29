"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleServerlessStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const dynamodb = require("@aws-cdk/aws-dynamodb");
const apigw = require("@aws-cdk/aws-apigateway");
class SampleServerlessStack extends cdk.Stack {
    constructor(scope, id, props) {
        var _a;
        super(scope, id, props);
        //write infrastructure code
        //Dynamo Table Definition
        const table = new dynamodb.Table(this, "Hello", {
            partitionKey: { name: "name", type: dynamodb.AttributeType.STRING },
        });
        //lambda function
        const dynamoLambda = new lambda.Function(this, "DynamoLambdaHandler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            code: lambda.Code.fromAsset("./functions"),
            handler: "function.handler",
            environment: {
                HELLO_TABLE_NAME: table.tableName,
            },
        });
        //permissions to lambda to dynamo table
        table.grantReadWriteData(dynamoLambda);
        const api = new apigw.RestApi(this, "hello-api");
        //Create branches
        const helloGroups = api.root.resourceForPath("helloGroups");
        helloGroups.addMethod("GET", new apigw.LambdaIntegration(dynamoLambda));
        new cdk.CfnOutput(this, "HTTP API URL", {
            value: (_a = api.url) !== null && _a !== void 0 ? _a : "Something went wrong with deploy",
        });
    }
}
exports.SampleServerlessStack = SampleServerlessStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLXNlcnZlcmxlc3Mtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW1wbGUtc2VydmVybGVzcy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFHakQsTUFBYSxxQkFBc0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNsRCxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7O1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLDJCQUEyQjtRQUU3Qix5QkFBeUI7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDOUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUM7U0FDckUsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCO1FBQ2pCLE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDcEUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsV0FBVyxFQUFFO2dCQUNYLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxTQUFTO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsdUNBQXVDO1FBQ3ZDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELGlCQUFpQjtRQUNqQixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRXhFLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQ3JDLEtBQUssUUFBRSxHQUFHLENBQUMsR0FBRyxtQ0FBSSxrQ0FBa0M7U0FDckQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNBO0FBL0JELHNEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSBcIkBhd3MtY2RrL2F3cy1sYW1iZGFcIjtcclxuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSBcIkBhd3MtY2RrL2F3cy1keW5hbW9kYlwiO1xyXG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbXBsZVNlcnZlcmxlc3NTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG4gICAgICAvL3dyaXRlIGluZnJhc3RydWN0dXJlIGNvZGVcclxuICAgIFxyXG4gICAgLy9EeW5hbW8gVGFibGUgRGVmaW5pdGlvblxyXG4gICAgY29uc3QgdGFibGUgPSBuZXcgZHluYW1vZGIuVGFibGUodGhpcywgXCJIZWxsb1wiLCB7XHJcbiAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lIDogXCJuYW1lXCIsIHR5cGUgOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklOR30sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xhbWJkYSBmdW5jdGlvblxyXG4gICAgY29uc3QgZHluYW1vTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkR5bmFtb0xhbWJkYUhhbmRsZXJcIiwge1xyXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcclxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFwiLi9mdW5jdGlvbnNcIiksXHJcbiAgICAgIGhhbmRsZXI6IFwiZnVuY3Rpb24uaGFuZGxlclwiLFxyXG4gICAgICBlbnZpcm9ubWVudDoge1xyXG4gICAgICAgIEhFTExPX1RBQkxFX05BTUU6IHRhYmxlLnRhYmxlTmFtZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy9wZXJtaXNzaW9ucyB0byBsYW1iZGEgdG8gZHluYW1vIHRhYmxlXHJcbiAgICB0YWJsZS5ncmFudFJlYWRXcml0ZURhdGEoZHluYW1vTGFtYmRhKTtcclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlndy5SZXN0QXBpKHRoaXMsXCJoZWxsby1hcGlcIik7XHJcblxyXG4gICAgLy9DcmVhdGUgYnJhbmNoZXNcclxuICAgIGNvbnN0IGhlbGxvR3JvdXBzID0gYXBpLnJvb3QucmVzb3VyY2VGb3JQYXRoKFwiaGVsbG9Hcm91cHNcIik7XHJcbiAgICBoZWxsb0dyb3Vwcy5hZGRNZXRob2QoXCJHRVRcIiwgbmV3IGFwaWd3LkxhbWJkYUludGVncmF0aW9uKGR5bmFtb0xhbWJkYSkpO1xyXG5cclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiSFRUUCBBUEkgVVJMXCIse1xyXG4gICAgICB2YWx1ZTogYXBpLnVybCA/PyBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggZGVwbG95XCIsXHJcbiAgICB9KTtcclxufVxyXG59XHJcbiJdfQ==