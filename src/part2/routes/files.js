import express from "express"
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const router = express.Router();

/* GET /files/:fileName */
router.get('/:fileName', function(req, res, next) {
  const { params: { fileName } } = req;
  const fullFilePath = resolve(__dirname, '../../../files/readme') + '/' + fileName;
  let contents = '';
  if (existsSync(fullFilePath)) {
    contents = readFileSync(fullFilePath, 'utf-8').trim();
    res.send({
      filename: fileName,
      length: contents.length,
      content: contents
    });
  } else {
    res.status(404);
    res.send({
      error: "file not found!",
      code: 404
    })
  }
  
});

export default router
