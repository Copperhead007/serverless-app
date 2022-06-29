#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SampleServerlessStack } from '../lib/sample-serverless-stack';

const app = new cdk.App();
new SampleServerlessStack(app, 'SampleServerlessStack');
