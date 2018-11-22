var cowsay = require('cowsay');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.text || (req.body && req.body.text)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body:  cowsay.say({
                text : req.query.text,
                e : "oO",
                T : "U "
            })
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a text on the query string or in the request body"
        };
    }
};