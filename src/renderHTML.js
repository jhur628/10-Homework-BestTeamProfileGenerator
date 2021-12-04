// Function to plug in manager info card to HTML
const renderManager = (managerData) => {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${managerData.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">ID: ${managerData.id}</p>
                <a href="mailto:${managerData.email}">${managerData.email}</a>
                <p class="card-text">Office Number: ${managerData.officeNumber}</p>
            </div>
        </div>
    `
}

// Function to render HTML
const renderHTML = (team) => {
    let cardArray = [];

    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = renderManager(employee);
            cardArray.push(managerCard);
        }
    }

    const cards = cardArray.join('');
    const generateCards = generateHTML(cards)
    return generateCards
}

const generateHTML = (cards) => {
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Your Team!</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            ${cards}
        </body>
    </html>
    `
}

module.exports = renderHTML;