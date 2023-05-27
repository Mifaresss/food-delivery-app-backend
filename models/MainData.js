import mongoose from 'mongoose'
import { ShopSchema } from './Shop.js'

const MainDataSchema = new mongoose.Schema({
   shops: [ShopSchema],
})
export default mongoose.model('MainDataSchema', MainDataSchema)