#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const sample_serverless_stack_1 = require("../lib/sample-serverless-stack");
const app = new cdk.App();
new sample_serverless_stack_1.SampleServerlessStack(app, 'SampleServerlessStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLXNlcnZlcmxlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW1wbGUtc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBcUM7QUFDckMsNEVBQXVFO0FBRXZFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksK0NBQXFCLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBTYW1wbGVTZXJ2ZXJsZXNzU3RhY2sgfSBmcm9tICcuLi9saWIvc2FtcGxlLXNlcnZlcmxlc3Mtc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IFNhbXBsZVNlcnZlcmxlc3NTdGFjayhhcHAsICdTYW1wbGVTZXJ2ZXJsZXNzU3RhY2snKTtcbiJdfQ==