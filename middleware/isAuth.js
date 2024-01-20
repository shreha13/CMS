const { getUser } = require("../controllers/users.controller");

module.exports = (userRole) => {
  return(req, res, next) => {
    if(!req.headers.userid){
        return res.send("Not a user")
    }
    const user = getUser(req.headers.userid);

    if(!user) {
      return res.send("Not a user")
    } 
    if(userRole && user.role !== userRole) {
      return res.send("Not a valid user")
    }
    next();
  }
}