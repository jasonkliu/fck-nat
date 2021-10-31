#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FckNatStack } from '../lib/fck-nat-stack';
import { FckNatPerfStack } from '../lib/fck-nat-perf-stack';
import { InstanceClass, InstanceSize, InstanceType } from '@aws-cdk/aws-ec2';

const app = new cdk.App();
const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }

const instanceType = InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO)

const fckNatStack = new FckNatStack(app, 'FckNatStack', {
  natInstanceType: instanceType, 
  iperfInstanceType: instanceType,
  env
});
new FckNatPerfStack(app, 'FckNatPerfStack', {
  iperfInstanceType: instanceType,
  env 
});