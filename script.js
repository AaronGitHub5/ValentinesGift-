function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "Angry"
document.getElementsByClassName("image")[0].src = "images/angry.jpg";
// Set the size of the image
document.getElementsByClassName("image")[0].style.width = "250px";  // Adjust the width as needed
document.getElementsByClassName("image")[0].style.height = "250px"; // Adjust the height as needed


    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "The no button is just for visuals";
    document.getElementById("name").style.display = "none";

    // a timeout to reset the position after a few seconds
    setTimeout(() => {
      // Reset the position of the button
      noButton.style.left = "";
      noButton.style.top = "";
    }, 1500); // Adjust the timeout duration (in milliseconds) as needed
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "EEEEE see you on the 15!!!!!!!!!!!!!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/YES.jpg";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
