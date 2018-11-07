var server = "http://SERVERADDRESS.eu:5555/";

exports.function = function(project) {
  var result = []
  var result = http.getUrl(server+"GetLogProject?id="+project._id, {format:"json"})
  return result.MOD
}