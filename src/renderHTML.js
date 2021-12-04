const renderManager = require("./renderManager");
const renderEngineer = require("./renderEngineer");
const renderIntern = require("./renderIntern")

// Function to render HTML
const renderHTML = (team) => {
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Your Team!</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            
        </body>
    </html>
    `
}
module.exports = renderHTML;