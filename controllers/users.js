/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Users, sequelize } from "../models/Users.js";
await sequelize.sync();
const users ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  usersert: async (req, res)=>{
   const { FirstName, LastName, MiddleName, Email, PhoneNumber, } = req.body;
    const e = await Users.create({
      FirstName, LastName, MiddleName, Email, PhoneNumber
    });
    res.status(201).json({
      "status": "true",
      "data": e
    });
  },
  usersall: async (req, res)=>{
    const userdata = await Users.findAll();
    res.json({
      "data": userdata
    });
  },
  upko: async (req, res)=>{
    const { id } = req.params;
    const user = await Users.findByPk(id);
    res.json({
      "data": user
    });
  },
};
export { users };