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
        const courseCollection = database.collection('course');

        

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

        // get all users
        app.get('/all-users', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.json(users);
        });

        // get all users
        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            console.log(req);
            const query = { _id: ObjectId(id) };
            const watch = await usersCollection.findOne(query);
            res.send(watch);
        });

        // get all students
        app.get('/students', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            const students = users.filter(user => user.userType === 'student')
            console.log(students);
            res.json(students);
        });
        // get all teachers
        app.get('/teachers', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            const teachers = users.filter(user => user.userType === 'teacher')
            console.log(teachers);
            res.json(teachers);
        });

        // create/add new user 
        app.post('/add-course', async (req, res) => {
            const creator = req.body.creator;
            const title = req.body.title;
            const description = req.body.description;
            const fees = req.body.fees;
            const duration = req.body.duration;
            const image = req.files.image;
            const imageData = image.data;
            const encodedImage = imageData.toString("base64");
            const imageBuffer = Buffer.from(encodedImage, 'base64');
            const course = {
                creator, title, description, fees, duration,
                image: imageBuffer
            }
            console.log("files:", req.files);
            const result = await courseCollection.insertOne(course);
            console.log(result);
            res.json(result);
        });

        // get all users
        app.get('/all-courses', async (req, res) => {
            const cursor = courseCollection.find({});
            const courses = await cursor.toArray();
            res.json(courses);
        });

        // get all users
        app.get('/course/:id', async (req, res) => {
            const id = req.params.id;
            console.log(req);
            const query = { _id: ObjectId(id) };
            const course = await courseCollection.findOne(query);
            res.send(course);
        });
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