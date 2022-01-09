const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
const cors = require('cors');
// env
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const fileUpload = require('express-fileupload');
// port address
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oh18i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        // database name
        const database = client.db('flexaDemic');
        // database collections
        const usersCollection = database.collection('users');
        

        // create/add new user 
        app.post('/users', async (req, res) => {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const userType = req.body.userType;
            const image = req.files.image;
            const imageData = image.data;
            const encodedImage = imageData.toString("base64");
            const imageBuffer = Buffer.from(encodedImage, 'base64');
            const user = {
                name, email, password, userType, 
                image: imageBuffer
            }
            console.log("files:", req.files);
            const result = await usersCollection.insertOne(user);
            console.log(result);
            res.json(result);
        });

        // // new user created/updated (for google sign-in)
        // app.put('/users', async (req, res) => {
        //     const user = req.body;
        //     const filter = { email: user.email };
        //     const options = { upsert: true };
        //     const updateDoc = { $set: user };
        //     const result = await usersCollection.updateOne(filter, updateDoc, options);
        //     res.json(result);
        // });
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello sp watch hut!')
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})