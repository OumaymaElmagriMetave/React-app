import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
  UserPoolId: "us-east-1_6oqEmFBc6",
  ClientId:"2ao932b5sua3titosql3aso07c"
}
export default new CognitoUserPool(poolData);