const router = require('express').Router();
const People = require('../models/People');

// [GET] Get all people
router.get('/', async (req, res) => {
  try {
    const people = await People.find().sort('-createdAt');
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// [POST] Create a new person
router.post('/', async (req, res) => {
  const person = new People({
    name: req.body.name,
    instagram: req.body.instagram,
    dob: new Date(req.body.dob),
    gender: req.body.gender.toLowerCase(),
    interested_in: req.body.interested_in.toLowerCase(),
    photo_url: req.body.photo_url
  });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; 