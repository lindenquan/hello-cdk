import * as cdk from 'aws-cdk-lib'
import { HelloCdkStack } from './hello-cdk-stack'

const app = new cdk.App()
new HelloCdkStack(app, 'HelloCdkStack', {
  env: { region: 'us-west-2' }
})
