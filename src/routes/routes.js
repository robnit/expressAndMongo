import { addBird, destroyBird, getBird, getBirds, updateBird } from "../controllers/controllers"

const routes = app => {
  app.route('/birds')
  .get((req, res, next) => {
    // this is middleware
    console.log(`request from ${req.originalUrl}`)
    console.log(`request type ${req.method}`)
    next();
  }, getBirds)
  .post(addBird)

  app.route('/birds/:id')
  .get(getBird)
  .put(updateBird)
  .delete(destroyBird)
}

export default routes;