# Boilerplate Express + Dynamo DB

Simple project for basic implementation of Dynamo DB with Express.

## To run project

1. Install dependencies
```bash
npm install
```

2. Run local server
```bash
npm run dev
```

## Environment Variables

This project requires a `.env` file in the root directory to configure the necessary environment variables. Below are the required variables:

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_REGION`: The AWS region where your DynamoDB is hosted (e.g., `us-east-1`).
- `DYNAMO_DB_TABLE`: The name of the DynamoDB table to be used.

Make sure to create a `.env` file and populate it with the appropriate values before running the project.
