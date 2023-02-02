const express = require('express');
require('dotenv').config();
const db = require('./config/connection');
const cors = require('cors')
const routes = require('./routes');
const SongModel = require('./models/Song')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// mongoose.connect("mongodb+srv://espinbm49:f4mHyyNj60J3Gtva@cluster0.84q1nnv.mongodb.net/songLibraryDB?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
// });

app.get('/', async (req, res) => {
  SongModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
});

// app.post('/insert', async (req, res) => {

//   const foodName = req.body.foodName;
//   const days = req.body.days;

//   const food = new FoodModel({ foodName: foodName, daysSinceIAte: days })

//   try {
//     await food.save();
//     res.send("inserted data")
//   } catch (err) {
//     console.log(error)
//   }
// });

// app.put('/update', async (req, res) => {

//   const newFoodName = req.body.newFoodName;
//   const id = req.body.id;

//   try {
//     await FoodModel.findById(id, (err, updatedFood) => {
//       updatedFood.foodName = newFoodName;
//       updatedFood.save()
//       res.send("update")
//     });
//   } catch (err) {
//     console.log(err)
//   }
// });

// app.delete('/delete/:id', async (req, res) => {
//   const id = req.params.id 
//   await FoodModel.findByIdAndRemove(id).exec()
//   res.send("deleted")
// })

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});



