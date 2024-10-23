// const mongoose = require('mongoose');
// const Candidate = require('./models/Candidate');

// mongoose.connect('mongodb://localhost:27017/candidates_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const seedCandidates = async () => {
//   await Candidate.deleteMany({});
//   await Candidate.insertMany([
//     { name: "John Doe", phone: "123456789", email: "john@example.com", gender: "Male", experience: "2 Years", skills: ["JavaScript", "React"] },
//     { name: "Jane Smith", phone: "987654321", email: "jane@example.com", gender: "Female", experience: "3 Years", skills: ["Python", "Django"] }
//   ]);
//   mongoose.connection.close();
// };

// seedCandidates();


const mongoose = require('mongoose');
const Candidate = require('./models/Candidate'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/candidates_db')
  .then(() => {
    console.log('Connected to MongoDB');
    return seedCandidates();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const seedCandidates = async () => {
  try {
    await Candidate.deleteMany({});
    await Candidate.insertMany([
      { name: "Vijay Ram", phone: "8247251035", email: "vijayram@example.com", gender: "Male", experience: "2 Years", skills: ["JavaScript", "React"] },
      { name: "Mary Johnson", phone: "555555555", email: "mary@example.com", gender: "Female", experience: "1 Year", skills: ["HTML", "CSS", "JavaScript"] }
    ]);
    console.log("Database seeded!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding the database:", err);
  }
};
