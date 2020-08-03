# aws-lambda-serverless
A test repo using utilizing the Serverless framework to deploy AWS Lambda functions to be used with an AWS Connect integration.



## Technologies Used

- Serverless Framework
- AWS
  - Lambda
  - Connect
- Node.js
- serverless-dotenv plugin

## Development

### System Requirements
- NPM
- Node.js
- Serverless Framework CLI

### Getting Started
This instructions assume you already have a Serverless and AWS account created and set up.
For more information on configuring Serverless to work with your AWS account, see this documentation:
[https://www.serverless.com/framework/docs/providers/aws/guide/credentials/](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)

1. Clone this repository and navigate to the local copy of the repository on your computer.

```shell
git clone https://github.com/kurtyazdizadeh/aws-lambda-serverless.git
cd aws-lambda-serverless
```

2. Install dependencies.
```shell
npm install
```

3. Create an account for the Open Weather Map API and register for an API key: [https://openweathermap.org/api](https://openweathermap.org/api).

4. Create a new .env file in the root directory of your local repository, inside the file add your API key. This will create an environment variable for your API key that can be used inside your Lambda function.
```shell
WEATHER_APP_ID={your API key here}
```

5. Deploy your Lambda Functions.
```shell
serverless deploy
```

After a few minutes, you should see the functions appear in your AWS Dashboard under Lambda.


## Other Notes
The integration with Amazon Connect is included with this repo. These instructions are only the necessary steps to deploy these sample Lambda functions using the Serverless Framework.
