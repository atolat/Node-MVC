var template = require('../views/template-main');  
var mongo_data = require('../model/mongoose-data');  
exports.get = function(req, res) {  
  var strGroup = "hello";
  mongo_data.indexlist(strGroup, function(err, indexList) {
    if (!err) {
      var strIndex = "",
        i = 0,
        indexCount = indexlist.length;
      for (i = 0; i < indexCount;) {
        strIndex = strIndex + "<li>" + indexlist[i].tfIdf + "</li>";
        i = i + 1;
      }
      strIndex = "<ul>" + strIndex + "</ul>"
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(template.build("Test web page on node.js", "Hello there", "<p>The teams in Group " + strGroup + " for Euro 2012 are:</p>" + strIndex));
      res.end();
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(template.build("Oh dear", "Database error", "<p>Error details: " + err + "</p>"));
      res.end();
    }
  });
};