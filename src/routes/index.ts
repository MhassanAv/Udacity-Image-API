
import express from 'express';
import resizeImage from './api/imgProcess';
import fs from 'fs';

const routes = express.Router();
//main route & endpoint 
routes.get('/', (req, res) => {
    const userData = {
        filename: req.query.filename as string,
        height: (req.query.height as unknown) as string,
        width: (req.query.width as unknown) as string
    };

    const tempDir = `./temp/${userData.filename}resized.jpg`;

    if (userData.filename == '' || userData.height == '' || userData.width == '') {
        //error message
        res.send("error! please enter the correct values");
    }
    //caching 
    if (fs.existsSync(tempDir)) {
        res.send("already exists: " + tempDir);
    } else {
        res.send("success!");
        resizeImage(userData.filename, userData.width, userData.height);
    }

});

export default routes;