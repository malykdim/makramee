module.exports = (defaultTitle) => (req, res, next) => {
    res.locals.title = defaultTitle;
    next();
};

// The res.locals property is an object that contains response local variables scoped to the request and because of this, it is only available to the view(s) rendered during that request/response cycle (if any).