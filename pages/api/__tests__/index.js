const axios = require("axios");

async function getFirstTicketTitle() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append(
        "Authorization",
        "Basic dWVrcG91ZG9tM0BnbWFpbC5jb206RWtwb3Vkb20jMTE="
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    const response = await fetch(
        "https://zccticketshelp.zendesk.com/api/v2/tickets.json?page=1&per_page=25",
        requestOptions
    );
    return response.tickets[0].subject;
}

module.exports = getFirstTicketTitle;