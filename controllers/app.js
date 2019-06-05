let app_first = async (ctx, next) => {
    ctx.response.body = '<h1>Hello First!</h1>';
};

let app_second = async (ctx, next) => {
    ctx.response.body = '<h1>Hello Second!</h1>';
};

module.exports = {
    'GET /': app_first,
    'POST /sigin': app_second
};