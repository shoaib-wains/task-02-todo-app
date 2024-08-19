import mongoose from "mongoose"
const schema = mongoose.Schema({
    todo:"String",
})

mongoose.models = {}  
const Todo= mongoose.models.Todos || mongoose.model('Todos',schema)
export default Todo;