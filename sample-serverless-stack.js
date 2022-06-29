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
            code: lambda.Code.asset("./functions"),
            handler: "function.handler",
            environment: {
                HELLO_TABLE_NAME: table.tableName,
            },
        });
        //permissions to lambda to dynamo table
        table.grantReadWriteData(dynamoLambda);
        const api = new apigw.RestApi(this, "hello-api");
        api.root
            .resourceForPath("hello")
            .addMethod("GET", new apigw.LambdaIntegration(dynamoLambda));
        new cdk.CfnOutput(this, "HTTP API URL", {
            value: (_a = api.url) !== null && _a !== void 0 ? _a : "Something went wrong with deploy",
        });
    }
}
exports.SampleServerlessStack = SampleServerlessStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLXNlcnZlcmxlc3Mtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW1wbGUtc2VydmVybGVzcy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFHakQsTUFBYSxxQkFBc0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNsRCxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7O1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLDJCQUEyQjtRQUU3Qix5QkFBeUI7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDOUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUM7U0FDckUsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCO1FBQ2pCLE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDcEUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQ3RDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsV0FBVyxFQUFFO2dCQUNYLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxTQUFTO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsdUNBQXVDO1FBQ3ZDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELEdBQUcsQ0FBQyxJQUFJO2FBQ1AsZUFBZSxDQUFDLE9BQU8sQ0FBQzthQUN4QixTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDckMsS0FBSyxRQUFFLEdBQUcsQ0FBQyxHQUFHLG1DQUFJLGtDQUFrQztTQUNyRCxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0E7QUE5QkQsc0RBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSBcIkBhd3MtY2RrL2F3cy1sYW1iZGFcIjtcbmltcG9ydCAqIGFzIGR5bmFtb2RiIGZyb20gXCJAYXdzLWNkay9hd3MtZHluYW1vZGJcIjtcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcblxuXG5leHBvcnQgY2xhc3MgU2FtcGxlU2VydmVybGVzc1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICAgIC8vd3JpdGUgaW5mcmFzdHJ1Y3R1cmUgY29kZVxuICAgIFxuICAgIC8vRHluYW1vIFRhYmxlIERlZmluaXRpb25cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCBcIkhlbGxvXCIsIHtcbiAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lIDogXCJuYW1lXCIsIHR5cGUgOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklOR30sXG4gICAgfSk7XG5cbiAgICAvL2xhbWJkYSBmdW5jdGlvblxuICAgIGNvbnN0IGR5bmFtb0xhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJEeW5hbW9MYW1iZGFIYW5kbGVyXCIsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMl9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuYXNzZXQoXCIuL2Z1bmN0aW9uc1wiKSxcbiAgICAgIGhhbmRsZXI6IFwiZnVuY3Rpb24uaGFuZGxlclwiLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgSEVMTE9fVEFCTEVfTkFNRTogdGFibGUudGFibGVOYW1lLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvL3Blcm1pc3Npb25zIHRvIGxhbWJkYSB0byBkeW5hbW8gdGFibGVcbiAgICB0YWJsZS5ncmFudFJlYWRXcml0ZURhdGEoZHluYW1vTGFtYmRhKTtcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ3cuUmVzdEFwaSh0aGlzLFwiaGVsbG8tYXBpXCIpO1xuICAgIGFwaS5yb290XG4gICAgLnJlc291cmNlRm9yUGF0aChcImhlbGxvXCIpXG4gICAgLmFkZE1ldGhvZChcIkdFVFwiLCBuZXcgYXBpZ3cuTGFtYmRhSW50ZWdyYXRpb24oZHluYW1vTGFtYmRhKSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkhUVFAgQVBJIFVSTFwiLHtcbiAgICAgIHZhbHVlOiBhcGkudXJsID8/IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBkZXBsb3lcIixcbiAgICB9KTtcbn1cbn1cbiJdfQ==