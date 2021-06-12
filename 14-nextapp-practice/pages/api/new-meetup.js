import { MongoClient } from "mongodb";
import { mong_str_connection } from "../../mongodb.config";

async function handler(req, res) {
  if (req.method == "POST") {
    const { title, image, address, description } = req.body;
    const client = await MongoClient.connect(mong_str_connection);
    const meetuosCollection = client.db().collection("meetups");
    const result = await meetuosCollection.insert({
      title,
      image,
      address,
      description,
    });
    client.close();
    res.status(201).json({ message: "New meetup added!" });
  }
}

export default handler;
