import connectDB from '../index.js'
import Animal from '../models/Animal.js'


export default async function createAnimal(data) {
    try {
        await connectDB()
        const newAnimal = new Animal(data)
        await newAnimal.save()
    } catch (e) {
        throw new Error(e)
    }
}