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
import { Product, sequelize } from "../models/Product.js";
await sequelize.sync();
const product ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert: async (req, res)=>{
   const {ProductName, Description, Category, Price, Stock, ExpirationDate,} = req.body;
   const e = await Product.create({
    ProductName, Description, Category, Price, Stock, ExpirationDate
   });
   res.status(201).json({
    "status": "true",
    "data": e
   });
  },
  all: async (req, res)=>{
    const data = await Product.findAll();
    res.json({
      "data": data
    });
  },
  pko: async (req, res)=>{
    const { id } = req.params;
    const prod = await Product.findByPk(id);
    res.json({
      "data": prod
    });
  },
};

export { product };