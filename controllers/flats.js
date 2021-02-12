
const Mst_Flats = require("../models/flats");




exports.addNewFlats = async (req, res) => {
  try {
    var flat = new Mst_Flats(req.body);
    console.log(req.body)
    var result = await flat.save();
   
    return res.send(result);
  } catch (err) {
  
    return res.send(err);
  }
};

exports.getAllFlats = async (req, res) => {
  try {
    var flats = await Mst_Flats.find().exec()
    //console.log(req.body)
    //var result = await conversation.save();
   
    return res.send(flats);
  } catch (err) {
  
    return res.send(err);
  }
};

exports.SearchFlats = async (req, res) => {
  try {
    var searchText = req.query.searchText;
    var flats = await Mst_Flats.find({
      FlatNumber : {$regex : searchText},
    }).exec()
    //console.log(req.body)
    //var result = await conversation.save();
   
    return res.send(flats);
  } catch (err) {
  
    return res.send(err);
  }
};

