import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
  UserPoolId: "us-east-1_3Ogc2yW18",
  ClientId:"7pj1cl3o9rpr03vano906ncjkp"
}
export default new CognitoUserPool(poolData);