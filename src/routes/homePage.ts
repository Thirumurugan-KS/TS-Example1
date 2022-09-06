import {Router, Request,Response} from 'express';

const homeRouter = Router()

  // define the home page route
  homeRouter.get('/', (req : Request, res : Response) => {
    console.log("Hi");
    res.send('Homes page')
  })

  homeRouter.get('/:name', (req : Request, res : Response) => {
    res.send(req.params.name);
  })

  export default homeRouter;
  
  