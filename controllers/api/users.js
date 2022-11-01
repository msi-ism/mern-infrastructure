const User = require('../../models/user')
const jwt = require('jsonwebtoken')


module.exports = {
  create
};


async function create(req, res) {
  try {
    // ^ add user to the database
    const user = await User.create(req.body)
    // ^ Create JWT Token
    const token = createJWT(user)
    // ^ sends token back to client as json
    res.json(token)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}


// ^ Helper Function
function createJWT(user) {
  return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}


// Baby step...
//   res.json({
//     user: {
//       name: req.body.name,
//       email: req.body.email
//     }
//   });
// }
