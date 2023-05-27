import mongoose from 'mongoose'

const Order = new mongoose.Schema({
   name: {type: String, required: false},
   email: {type: String, required: true},
   phone: {type: Number, required: true},
   address: {type: String, required: true},
   products: { type: Array, required: true },
   totalPrice: { type: Number, required: true },
})

export default mongoose.model('Order', Order)