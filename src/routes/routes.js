import { addBird } from "../controllers/controllers"

const routes = app => {
  app.route('/birds')
  .get((req, res, next) => {
    // this is middleware
    console.log(`request from ${req.originalUrl}`)
    console.log(`request type ${req.method}`)
    next();
  }, (req, res, next) => {
    res.send('YOU GOT BIRDS')
  })

  .post(addBird)

  app.route('/birds/:id')
  .put((req, res) => {
    res.send('YOU PUT A BIRD')
  })

  .delete((req, res) => {
    res.send('YOU DELETED A BIRD')
  })
}

export default routes;