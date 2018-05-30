console.log("TEST")

var fs = require('fs');
let filepath = './input/input.csv';

var datafile = "";

fs.readFile(filepath, 'utf-8', (err, data) => {
    if(err){
        console.log("An error ocurred reading the file :" + err.message);
        return;
    }

    // Change how to handle the file content
    //console.log("The file content is : " + data);
    populateTable(data);
});



function populateTable(data){

    let item = data.split('\n');
    console.log(item[0]);

    let counter = 0;
    for(let point in item){
        
        for(let x in point.split(';')){

        }
        counter++;
    }


}