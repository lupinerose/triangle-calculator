$(document).ready(function(){
  $("#calculatorInput").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1) {
      if (side1 === side2 && side1 === side3 && side2 === side3) {
        $("#answerSection").show();
        $("#answer").text("equilateral!");
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        $("#answerSection").show();
        $("#answer").text("isosceles!");
      } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        $("#answerSection").show();
        $("#answer").text("scalene!");
      }
    }
    event.preventDefault();
  });
});
