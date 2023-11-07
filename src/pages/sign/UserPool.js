import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
  UserPoolId: "us-east-1_Rzf4xAcsN",
  ClientId:"2275hf5cecfa91d9dqca5d7nf8"
}
export default new CognitoUserPool(poolData);