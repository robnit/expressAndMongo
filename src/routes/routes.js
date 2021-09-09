const routes = app => {
  app.route('/birds')
  .get((req, res) => {
    res.send('YOU GOT BIRDS')
  })

  .post((req, res) => {
    res.send('YOU POSTED BIRDS')
  })

  app.route('/birds/:id')
  .put((req, res) => {
    res.send('YOU PUT A BIRD')
  })

  .delete((req, res) => {
    res.send('YOU DELETED A BIRD')
  })
}

export default routes;