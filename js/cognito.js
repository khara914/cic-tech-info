// Cognito
var params = {
    AccountId: "864974540803",
    RoleArn: "arn:aws:iam::864974540803:role/Cognito_CICtechUnauth_DefaultRole",
    IdentityPoolId: "us-east-1:da705614-f984-48d2-9772-f40648923eae"
};
AWS.config.region = "us-east-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
AWS.config.credentials.get( function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully authorized. ID:" + AWS.config.credentials.identityId);
    }
});