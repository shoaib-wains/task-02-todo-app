import mongoose from "mongoose"
const schema = new mongoose.Schema({
    name:"String",
    email:"String",
    password:"String",
    confirm:"String"
})

mongoose.models = {}  
const User= mongoose.models.Users || mongoose.model('Users',schema)
export default User;