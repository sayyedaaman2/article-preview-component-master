
document.getElementById("openDialogButton").addEventListener("click", function(e) {
    const dialogOverlay = document.getElementById("dialogOverlay");
    
    // Toggle the display property between 'flex' and 'none'
    if (dialogOverlay.style.display === "flex") {
        dialogOverlay.style.display = "none";
    } else {
        dialogOverlay.style.display = "flex";
    }
});
