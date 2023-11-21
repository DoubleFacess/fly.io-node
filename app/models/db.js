const { Client } = require('pg');
const dbConfig = require("../config/db.config.js");

class Database {
    constructor() {
        this.client = new Client({
        connectionString: dbConfig.DATABASE_URL,
        });
    }

    async connect() {
        await this.client.connect();
        console.log('Connected to the database');
    }

    async disconnect() {
        await this.client.end();
        console.log('Disconnected from the database');
    }

    async query(sql, params) {
        return await this.client.query(sql, params);
    }
}

module.exports = new Database();