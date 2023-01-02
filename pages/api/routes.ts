import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      key: 1,
      requestNumber: "№1",
      fromLat: 59.84660399,
      fromLng: 30.29496392,
      toLat: 59.82934196,
      toLng: 30.42423701,
    },
    {
      key: 2,
      requestNumber: "№2",
      fromLat: 59.82034196,
      fromLng: 30.42423701,
      toLat: 59.82761295,
      toLng: 30.41705607,
    },
    {
      key: 3,
      requestNumber: "№3",
      fromLat: 59.83567701,
      fromLng: 30.38064206,
      toLat: 59.24660399,
      toLng: 30.29496392,
    },
    {
      key: 4,
      requestNumber: "№4",
      fromLat: 59.84660399,
      fromLng: 30.20496392,
      toLat: 59.82761295,
      toLng: 30.41705607,
    },
    {
      key: 5,
      requestNumber: "№5",
      fromLat: 59.83567701,
      fromLng: 30.38064206,
      toLat: 59.84660399,
      toLng: 30.29496392,
    },
  ]);
}
