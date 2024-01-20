const { randomUUID } = require('crypto');
const users = [
  {
    name: 'shreha',
    id: '1',
    role: "Admin",
    companyId: 1
  }, {
    name: 'shreha',
    id: '2',
    role: "Editor",
    companyId: 1
  }, {
    name: 'shreha',
    id: '3',
    role: "Viewer",
    companyId: 1
  }
]


exports.addUser = (req, res, next) => {
  try {
    const { name, companyId, role } = req.body;
    const id = randomUUID();
    const userDetail = {
      name,
      companyId,
      role,
      id,
    }

    users.push(userDetail);
    res.send("User saved successfully")
  }
  catch(err) {
    res.send(err.message);
  }
}

// exports.getUser = (req, res, next) => {
//   try {
//     const userId = req.params.userId;
//     const user = users.find(u =>u.id === userId)
//     res.send(user)
//   }
//   catch(err) {
//     res.send(err.message);
//   }
// }

exports.getUser = (userId) => {
  return users.find(u =>u.id === userId);
}

exports.getUsers = (req, res, next) => {
  try {
    res.send(users)
  }
  catch(err) {
    res.send(err.message);
  }
}