const fs = require("fs");

fs.readFile('./script451-499.json', 'utf-8', (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(jsonString);
    const allScripts = data.callTranscripts;
    allScripts.forEach(script => {
      fs.writeFile(`./transcript-${script.callId}.json`, JSON.stringify(script.transcript, null, 2), err => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
        }
      })
    });
  }
});


