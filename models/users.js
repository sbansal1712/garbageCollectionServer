const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema(
  {
    
    Username : {type : String},
    Password : {type : String},
  
    
  },
  { collection: "Mst_Users" }
);


const Mst_Users = mongoose.model("Mst_Users", UserSchema);
module.exports = Mst_Users;