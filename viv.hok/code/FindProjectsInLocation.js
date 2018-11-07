var server = "http://SERVERADDRESS.eu:5555/";

exports.function = function(loc) {
  var result = http.getUrl(server+"search?id="+loc, {format:"json"})
  return result
}