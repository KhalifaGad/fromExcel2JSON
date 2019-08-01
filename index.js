var excelToJson = require('convert-excel-to-json');
var fs = require("fs");

var result = excelToJson({
    sourceFile: 'drugs edited.xlsx',
    header:{
        rows: 3
    },
    columnToKey: {
        B: 'drugName',
        C: 'company',
        E: 'packInPriceCertificate',
        F: 'price'
    }
});

fs.writeFile("drugs.json", JSON.stringify(result), function (err){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });


