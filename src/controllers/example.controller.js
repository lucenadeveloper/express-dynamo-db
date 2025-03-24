import { ExampleModel } from "../models/example.model.js";

export class ExampleController {
  constructor() {
    this.model = new ExampleModel();
  }

  async create(req, res) {
    try {
      const user = await this.model.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async get(req, res) {
    try {
      const user = await this.model.getById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const user = await this.model.update(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await this.model.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await this.model.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}