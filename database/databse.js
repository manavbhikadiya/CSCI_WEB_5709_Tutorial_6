const mongoose = require("mongoose");

const connectionURI =
  "mongodb+srv://manavbhikadiya410:khN2Ru47fWrwLluO@projectcluster.91eief0.mongodb.net/";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionURI, options)
  .then(() => {
    console.log("MongoDb connection Successful.");
  })
  .catch((error) => {
    console.error("Error Occured in Connection", error);
  });
