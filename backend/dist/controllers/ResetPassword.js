"use strict";

const connection = require('../../database/knex');

const bcrypt = require('bcrypt');

const saltRounds = 10;

const jwt = require("jsonwebtoken");

module.exports = {
  async update(req, res) {
    const {
      email,
      password
    } = req.body;

    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      const [user] = await connection.select('*').from('users').where({
        email
      }).update({
        password: hash
      });
      return res.status(201).send({
        user
      });
    } catch (error) {
      return res.send({
        error: 'Error on reset password, try again'
      });
    }
  },

  async check(req, res) {
    const token = req.query.token;
    if (!token) return res.status(400).send({
      message: 'no token'
    });

    try {
      const decoded = await jwt.verify(token, process.env.RESET_PW_TOKEN);
      const [user] = await connection.select('*').from('users').where({
        id: decoded.id
      });

      if (!user) {
        return res.status(400).send({
          message: 'User not found'
        });
      }

      return res.send(200);
    } catch (err) {
      return res.send({
        message: 'Token expired'
      });
    }
  }

};