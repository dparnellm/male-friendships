function checkAge() {
  var age = document.getElementById("age").value;
  
  if (age == null || age < 8 || age > 130) {
    document.getElementById("ageValidationMessage").innerHTML = "Age is a required field and must be between 8 and 130";
  } else {
    document.getElementById("ageValidationMessage").innerHTML = "";
  }
}  
  
function validateInfo() {
  
  var age = document.getElementById("age").value;      
  var isMaleYes = document.getElementById("isMaleYes").checked;
  var isMaleNo = document.getElementById("isMaleNo").checked;
  var maleComment = document.getElementById("maleComment").value;      
  var qualities = document.getElementById("qualities").value;
  
  var satisfactionRadioButtons = document.getElementsByName("satisfaction");
  var satisfactionLevel = "";
  for (var index = 0; index < satisfactionRadioButtons.length; index++) {
    if (satisfactionRadioButtons[index].checked) {
      satisfactionLevel = satisfactionRadioButtons[index].value;
      break;
    }
  }
  
  var ache = document.getElementById("ache").checked;
  var quick = document.getElementById("quick").checked;
  var weird = document.getElementById("weird").checked;
  var suffer = document.getElementById("suffer").checked;
  var favoriteMemories = document.getElementById("favoriteMemories").checked;
  var shouldnt = document.getElementById("shouldnt").checked;
  var perceptions = document.getElementById("perceptions").checked;
  var touchStories = document.getElementById("touchStories").value;
  
  var vulnerabilityRadioButtons = document.getElementsByName("vulnerability");
  var comfortLevelWithVulnerability = "";
  for (var index = 0; index < vulnerabilityRadioButtons.length; index++) {
    if (vulnerabilityRadioButtons[index].checked) {
      comfortLevelWithVulnerability = vulnerabilityRadioButtons[index].value;
      break;
    }
  }
  
  var cultureAndImprovement = document.getElementById("cultureAndImprovement").value;
  
  // Prepare the validation message.
  var validationMessage = ""; 
  if (age == null || age < 8 || age > 130) {
    validationMessage += "Please enter an age between 8 and 130.\n";
  }
  if (isMaleYes == false && isMaleNo == false) {
    validationMessage += "Please indicate whether you identify as male or not.\n";
  }
  if (maleComment.length == 1 || maleComment.length == 2) {
    validationMessage += "If you enter a comment about your sense of gender, it must have at least 3 characters.\n";
  }
  if (qualities.length < 3) {
    validationMessage += "The qualities you want in a male friend is a required field and the comment must be at least 3 characters.\n"
  }
  if (satisfactionLevel.length == 0) {
    validationMessage += "Please make a selection for how you feel about the state of your male friendships.\n";
  }
  if (ache == false && quick == false && weird == false && suffer == false && favoriteMemories == false && shouldnt == false
      && perceptions == false) {
    validationMessage += "For the various statements about physical touch, please mark at least one selection that resonates with you.\n";
  }
  if (touchStories.length < 3) {
    validationMessage += "The field for sharing thoughts/feelings/experiences/stories about physical touch in friendship is a required field and must be at least 3 characters in length.\n";
  }
  if (comfortLevelWithVulnerability.length == 0) {
    validationMessage += "Please make a selection for your comfort level with vulnerability in your best male friendships.\n";
  }
  if (cultureAndImprovement.length < 3) {
    validationMessage += "The field for sharing thoughts on your culture's approach to male friendships and things can improve is a required field and must be at least 3 characters in length.\n";
  }
  
  if (validationMessage.length == 0) {
    validationMessage += "Your data has been validated.";
  }
  
  alert(validationMessage);
}