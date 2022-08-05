Template.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
});

//{{prettifyDate timestamp}} this will go in html