const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const csv = require('csvtojson');
 
const csvToJson = () => {
    const folderName = uuidv1();
    fs.mkdirSync(folderName);
    csv().fromFile('./customer-data.csv')
    .then((jsonFile)=>{         
        fs.copyFileSync('./customer-data.csv',path.join(__dirname,folderName,'data.csv'));        
        fs.writeFileSync(path.join(__dirname,folderName,'data.json'), JSON.stringify(jsonFile))         
    })
    .catch(error =>{
        console.error(error);
    }) 
}

csvToJson();