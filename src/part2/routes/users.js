import express from "express"
import getUsers from "../repository/get-users"

const router = express.Router();

/* GET /users listing. */
router.get('/', async function(req, res, next) {
  try {
    let users = await getUsers();
    users = users.map((e) => {
      const { _id, isActive, firstName, lastName, balance } = e;
      return { _id, isActive, firstName, lastName, balance };
    });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
})

// B. write another API here....
router.get('/:id', async function(req, res, next) {
  const { params : { id } } = req; 
  console.log(id);
  try {
    let users = await getUsers();
    users = users.filter((e) => {
      return e._id == id
    });
    if (users) {
      res.send(users[0]);
    } else {
      res.status(404).send('User Not Found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
})

export default router
