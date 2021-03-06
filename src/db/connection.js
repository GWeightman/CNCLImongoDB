require("dotenv").config()
const { MongoClient } = require("mongodb")

const connection = async (crudFunc, movieObj) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI)
        await client.connect()
        const db = client.db("FavMovies")
        const collection = db.collection("Movies")
        await crudFunc(movieObj, collection)
        client.close()
    } catch (error) {
        console.log(error)
    }
}

const connection2 = async (crudFunc, movieObj, newObj) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI)
        await client.connect()
        const db = client.db("FavMovies")
        const collection = db.collection("Movies")
        await crudFunc(movieObj, newObj, collection)
        client.close()
    } catch (error) {
        console.log(error)
    }
}

const connection3 = async (crudFunc) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI)
        await client.connect()
        const db = client.db("FavMovies")
        const collection = db.collection("Movies")
        await crudFunc(collection)
        client.close()
    } catch (error) {
        console.log(error)
    }
}


module.exports = { connection, connection2, connection3 }