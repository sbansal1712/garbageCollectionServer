const mongoose = require("mongoose");



const FlatSchema = new mongoose.Schema(
  {
    
    FlatNumber : {type : String},
    FlatName : {type : String},
    Block : {type : String},
    Status : {type : String},
    Score : {type : Number}
    
  },
  { collection: "Mst_Flats" }
);


const Mst_Flats = mongoose.model("Mst_Flats", FlatSchema);
module.exports = Mst_Flats;
