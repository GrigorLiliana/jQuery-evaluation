$(function() {
  console.log("doc loaded"); //verify if the jQuery marche bien

  $("form").on("submit", function(event) {
    //not refresh the page
    event.preventDefault();
    //call the functions to check our rules in the moment of the submition

    checkSelectCase();
    checkTextareaCase();

    let optionValue = $("select").val();
    let optionValid = optionValue != null;
    let textareaValue = $("textarea").val();
    let textareaLength = textareaValue.length;
    let textareaValid = textareaLength >= 15;
    if (optionValid && textareaValid) {
      $("form").text(
        "Congratulations! Your form has been sent successfully. We'll review your motivation and get back to you as soon as possible."
      );
    }
  });
  //add events when the user change
  $("select").on("change", checkSelectCase);
  $("textarea").on("keyup", checkTextareaCase);

  //functions
  //check select case
  function checkSelectCase() {
    //get the value of the option selected
    let optionValue = $("select").val();

    //take out the default value
    let optionValid = optionValue != null;
    //make the logic
    if (optionValid) {
      //and the display
      $("select").css("border-color", "green");
    } else {
      $("select").css("border-color", "red");
    }
  }
  //check textarea case
  function checkTextareaCase() {
    //get the value of the message
    let textareaValue = $("textarea").val();

    //get the length of the message
    let textareaLength = textareaValue.length;

    //create condition
    let textareaValid = textareaLength >= 15;
    //logic
    if (textareaValid) {
      $("textarea").css("border-color", "green");
    } else {
      $("textarea").css("border-color", "red");
    }
  }
  /*$("footer").on("mousemove", function() {
    $("#bcgChange").css("background-color", "#061339");
    $("footer").off("mousemove");
  });*/
  //I have made with css becouse I don't know how I remove the event to make again when hover ;(
}); //the end
