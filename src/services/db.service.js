import { 
    PutCommand, 
    GetCommand, 
    UpdateCommand, 
    DeleteCommand,
    ScanCommand 
  } from "@aws-sdk/lib-dynamodb";
  import { ddbDocClient } from "../config/aws.config.js";
  
  export class DynamoDBService {
    constructor(tableName) {
      this.tableName = tableName;
    }
  
    async create(item) {
      const params = {
        TableName: this.tableName,
        Item: item
      };
      return ddbDocClient.send(new PutCommand(params));
    }
  
    async get(key) {
      const params = {
        TableName: this.tableName,
        Key: key
      };
      return ddbDocClient.send(new GetCommand(params));
    }
  
    async update(key, updateExpression, expressionAttributes) {
      const params = {
        TableName: this.tableName,
        Key: key,
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributes,
        ReturnValues: "ALL_NEW"
      };
      return ddbDocClient.send(new UpdateCommand(params));
    }
  
    async delete(key) {
      const params = {
        TableName: this.tableName,
        Key: key
      };
      return ddbDocClient.send(new DeleteCommand(params));
    }
  
    async getAll() {
      const params = {
        TableName: this.tableName
      };
      return ddbDocClient.send(new ScanCommand(params));
    }
  }