var server = "http://SERVERADDRESS.eu:5555/";

exports.function = function() {
  var result = http.getUrl(server+"get", {format:"json"})
  return result
}