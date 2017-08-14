$(document).ready(function() {
    $("#favoritethings").submit(function() {
      event.preventDefault();

      var favorite1 = $("#question1").val()
      var favorite2 = $("#question2").val()
      var favorite3 = $("#question3").val()
      var favorite4 = $("#question4").val()

      var favoritesArray = [favorite1, favorite2, favorite3, favorite4]

      var newfavorite1 = favoritesArray[0]
      var newfavorite2 = favoritesArray[1]
      var newfavorite3 = favoritesArray[2]

      var favoritesArray2 = [newfavorite1, newfavorite2, newfavorite3]

      var newArray1 = []

      newArray1.push(favoritesArray2)

      $("#favoritelist").text(newArray1)
    });
  });
