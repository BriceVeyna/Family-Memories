Template.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('MM-dd-yyyy')
});

//{{prettifyDate timestamp}} this will go in html