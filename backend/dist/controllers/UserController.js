"use strict";

const connection = require('../../database/knex');

const crypto = require('crypto');

const bcrypt = require('bcrypt');

const saltRounds = 10;
module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');
    return response.json(users);
  },

  async store(request, response) {
    const {
      name,
      surname,
      email,
      password
    } = request.body;
    const id = crypto.randomBytes(5).toString('HEX');
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt); //    console.log(hash)
    //    console.log(id)
    // Store hash in your password DB.

    await connection('users').insert({
      id,
      name,
      surname,
      email,
      password: hash
    });
    return response.status(201).send({
      id
    });
  }

};