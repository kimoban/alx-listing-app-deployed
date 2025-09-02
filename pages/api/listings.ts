import { NextApiRequest, NextApiResponse } from 'next';

const listings = [
  { id: 1, title: 'Sample Listing', description: 'A great place!' },
  // Add more sample listings here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(listings);
  } else if (req.method === 'POST') {
    const newListing = { id: Date.now(), ...req.body };
    listings.push(newListing);
    res.status(201).json(newListing);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
