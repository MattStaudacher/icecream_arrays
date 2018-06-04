$(document).ready(function() {
  $("#flavorsForm").submit(function(event) {
    var flavors = ["flavorone", "flavortwo", "flavorthree"];
    flavors.forEach(function(flavor) {
    var userInput = $("select#" + flavor).val();
    $("." + flavor).text(userInput);
    });
  event.preventDefault();
  });
});
