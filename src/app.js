/* istanbul ignore file */
try {
    const { isEmpty, isValidGamerTag } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;


    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
	if(isEmpty(gamerTagValue)){
		feedbackMessageText = "Gamer tag cannot be empty"; 
	}else{
		if(!isValidGamerTag(gamerTagValue)){
			feedbackMessageText = "Gamer tag must contain at least 8 characters, including one number and one special character";
		}else{
			feedbackMessageText = "Gamer tag is valid";
		}
	}
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
