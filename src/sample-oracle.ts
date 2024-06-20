import express, { Request, Response } from "express";
import dotenv from "dotenv";  // Was not installed so not sure how you used .env
import { getLatestAastased, getFilteredAastased } from "./queries";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/eestat/1/elujoud/:id", async (req: Request, res: Response) => {
  try {
    const jykood = parseInt(req.params.id, 10);
    if (isNaN(jykood)) {
      res.status(400).send("Invalid jykood");
      return;
    }
    const result = await getLatestAastased(jykood);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying the database");
  }
});

app.get("/filtered-aastased/:id", async (req: Request, res: Response) => {
  try {
    const jykood = parseInt(req.params.id, 10);
    if (isNaN(jykood)) {
      res.status(400).send("Invalid jykood");
      return;
    }
    const result = await getFilteredAastased(jykood);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying the database");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
