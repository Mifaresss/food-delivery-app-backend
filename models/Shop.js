import mongoose from 'mongoose'
import {ProductSchema} from './Product.js'

export const ShopSchema = new mongoose.Schema({
   name: String,
   products: [ProductSchema],
})