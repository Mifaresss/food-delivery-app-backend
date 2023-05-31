import express from 'express'
import mongoose from 'mongoose'
import MainData from './models/MainData.js'
import Order from './models/Order.js'
const DB_URL = 'mongodb+srv://Mifares:shokirovan@firstcluster.afg2qiu.mongodb.net/food-delivery?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.setHeader('Access-Control-Allow-Methods', '*')
   res.setHeader('Access-Control-Allow-Headers', '*')
   next()
})

app.get('/stores', async (req, res) => {
   try {
      const stores = await MainData.findOne()
      res.json(stores.shops)
   } catch (e) {
      console.log(e)
   }
})

app.post('/order', async (req, res) => {
   try {
      const orderData = req.body
      const order = new Order(orderData)
      await order.save()
      res.status(200).json('We have placed your order, thanks!')
   } catch (e) {
      console.log(e.message)
   }
})

async function start() {
   try {
      await mongoose.connect(DB_URL)
      app.listen(PORT, () => console.log('Server working!'))
   } catch (e) {
      console.log(e.message)
   }
}
start()
