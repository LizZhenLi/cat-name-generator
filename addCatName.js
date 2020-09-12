const prompt = require('prompt')
const fs = require('fs')

prompt.start();
fs.readFile('catName.json', (err, data) => {
  if (err) throw err;
  let catname = JSON.parse(data);

  if (!catname) {
    catname = []
  }

  prompt.get(['name', 'gender', 'language'], function (err, result) {
    if (err) { return onErr(err); }

    catname.push({
      name: result.catname,
      gender: result.gender,
      language: result.language
    })
    console.log(name)

    let stringData = JSON.stringify(name);
    fs.writeFileSync('catName.json', stringData);

  });


  function onErr(err) {
    console.log(err);
    return 1;
  }



});

