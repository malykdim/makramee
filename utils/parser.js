function parseError(error) {    
    const result = {
        messages: [],
        fields: {}
    };
    
    // check type of error
    if (error.name == 'ValidationError') {
        // if error.name = ValidationError -> Mongoose validation, take error.entries => ([field, e]) => [field, e.message]
        for (let [field, e] of Object.entries(error.errors)) {
            result.messages.push(e.message);
            result.fields[field] = field;
        }
    } else if (Array.isArray(error)) {
        // if Array -> express validator, take msg and param props from array
        result.messages = error.map(e => e.msg);
        result.fields = Object.fromEntries(error.map(e => [e.param, e.param]));
    } else {
        // process regular error, take message prop
        result.messages = error.message.split('\n');
    }
    
    // return { messages: [String], fields: Object }
    return result;
}

module.exports = {
    parseError
};