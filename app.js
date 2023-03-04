const express = require('express');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
    let statusCode = 200;
    res.status(statusCode).sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/hello', (req, res) => {
  const language = req.query.language;
  let msgText = '';
  let errMsg = '';
  let statusCode = 200;
  


  switch (language) {
    case 'English':
      msgText = 'Hello world';
      break;
    case 'French':
      msgText = 'Bonjour le monde';
      break;
    case 'Hindi':
      msgText = 'Namastey sansar';
      break;
    default:
      statusCode = 400;
      errMsg = 'The requested language is not supported';
  }


  if(errMsg){
    res.status(statusCode).send(errMsg);
  }
  else{
  res.status(statusCode).send(msgText);}
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
