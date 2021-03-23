const data = [
  {
    "x": "plane",
    "y": 105
  },
  {
    "x": "helicopter",
    "y": 102
  },
  {
    "x": "boat",
    "y": 6
  },
  {
    "x": "train",
    "y": 34
  },
  {
    "x": "subway",
    "y": 30
  },
  {
    "x": "bus",
    "y": 268
  },
  {
    "x": "car",
    "y": 130
  },
  {
    "x": "moto",
    "y": 275
  },
  {
    "x": "bicycle",
    "y": 179
  },
  {
    "x": "horse",
    "y": 234
  },
  {
    "x": "skateboard",
    "y": 300
  },
  {
    "x": "others",
    "y": 148
  }
]

export default async (req, res) => {
  res.json(JSON.stringify({status: 'ok', data}))
}