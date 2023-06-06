const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;



// middleware 
app.use(express.json());
app.use(cors());

//doctorMaster
// 5el0RliVg1lrhIKM

const uri = "mongodb+srv://doctorMaster:5el0RliVg1lrhIKM@cluster0.wdjom0q.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const servicesCollection = client.db('doctorChamber').collection('services'); 
    const bookingsCollection = client.db('doctorChamber').collection('bookings'); 
    
    app.get('/services', async (req, res) => {
        const cursor = servicesCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.get('/services/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await servicesCollection.findOne(query);
      res.send(result);
    })

    // bookings 

    app.patch('/bookings/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const option = {upsert: true};
      const updatedBooking = req.body;
      console.log(updatedBooking);
      const updateDoc = {
        $set:{
          status: updatedBooking.status
        }
      }
      const result = await bookingsCollection.updateOne(filter, updateDoc, option );
      res.send(result);
    })

    app.get('/bookings', async(req, res) => {
       const email = (req.query.email);
       console.log(email);
      let query = {};
      if(req.query?.email){
        query = {email: req.query?.email};
      }
      const result = await bookingsCollection.find(query).toArray();
      res.send(result);
    })

    app.delete('/bookings/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await bookingsCollection.deleteOne(query);
      res.send(result);
    })

    app.post('/services', async(req, res) => {
      const card = req.body;
      console.log(card);
      const result = await bookingsCollection.insertOne(card);
      res.send(result);
    })

    app.delete('/services/delete/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)}
      const result = await bookingsCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('chamber is running');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})