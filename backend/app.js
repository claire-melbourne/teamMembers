const express = require('express');
const { TeamMember } = require('./model');

const app = express();
app.use(express.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/newMember', async (req, res, next) => {
  console.log('received data: ', req.body)
  try {
    const newMember = await TeamMember.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      story: req.body.story,
      favoriteColor: req.body.favoriteColor,
      photoUrl: req.body.photoUrl
    })
    res.json(newMember + ' data saved')
  } catch (error) {
    console.log(error)
    res.status(400).end();
  }
})

module.exports = app;
