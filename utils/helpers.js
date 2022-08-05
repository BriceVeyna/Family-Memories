module.exports = {
    prettifyDate: function (timestamp) {
      var curr_date = timestamp.getDate();
      var curr_month = timestamp.getMonth();
      var curr_year = timestamp.getFullYear();
      result = `${curr_month}-${curr_date}-${curr_year}`
      return result;
    },
  };
  
  //{{prettifyDate timestamp}} this will go in html
  