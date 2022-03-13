import express from 'express';
import resizeImage from './api/imgProcess';
import * as fs from 'fs';

const routes = express.Router();
//main route & endpoint
routes.get('/', (req: express.Request, res: express.Response): void => {
  const userData = {
    filename: req.query.filename as string,
    height: (req.query.height as unknown) as string,
    width: (req.query.width as unknown) as string
  };

  const tempDir = `./temp/${userData.filename}_resized_${userData.height}X${userData.width}.jpg`;

  if (
    userData.filename === '' ||
    userData.height === '' ||
    userData.width === ''
  ) {
    //error message
    res.write(`<h1>error!<br> <h3>please enter the correct values<h3>`);
  }
  //caching
  if (fs.existsSync(tempDir)) {
    res.sendFile(
      `${userData.filename}_resized_${userData.height}X${userData.width}.jpg`,
      { root: 'temp' }
    ); // I added the functionality to do serverl sizes of the same image
  } else {
    resizeImage(userData.filename, userData.width, userData.height);
    setTimeout(function(): void {
      if (userData.filename !== '') {
        //here is the fix for (no such directory or file), didn't need to use fs.mkdir
        res.sendFile(
          `${userData.filename}_resized_${userData.height}X${userData.width}.jpg`,
          { root: 'temp' }
        );
      }
    }, 300);
  }
});

export default routes;
