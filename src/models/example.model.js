import { DynamoDBService } from "../services/db.service.js";
import { randomUUID } from "crypto";

export class ExampleModel {
  
  constructor() {
    this.TableName = 'example';
    this.dbService = new DynamoDBService(this.TableName);
  }

  async create(userData) {
    const user = {
      id: randomUUID(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    await this.dbService.create(user);
    return user;
  }

  async getById(id) {
    const result = await this.dbService.get({ id });
    return result.Item;
  }

  async update(id, userData) {
    let updateExpression = "set ";
    const expressionAttributes = {};

    // Por não utilizar tipagem nem model, deixo aberto para qualquer update
    Object.keys(userData).forEach((key, index) => {
      updateExpression += `${key} = :${key}${index < Object.keys(userData).length - 1 ? ', ' : ''}`;
      expressionAttributes[`:${key}`] = userData[key];
    });

    const result = await this.dbService.update(
      { id },
      updateExpression,
      expressionAttributes
    );
    return result.Attributes;
  }

  async delete(id) {
    await this.dbService.delete({ id });
    return { id };
  }

  async getAll() {
    const result = await this.dbService.getAll();
    return result.Items;
  }
}