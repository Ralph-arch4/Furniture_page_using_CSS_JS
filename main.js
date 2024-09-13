document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".sharing-button");
    const divColored = document.querySelector(".contact-preview-container");
    const hiddenContent = document.querySelector(".hidden-content");
    const avatarImage = document.querySelector(".avatar");
    button.addEventListener("click", function() {
        divColored.style.backgroundColor = "grey";
        hiddenContent.style.display = "flex";
        button.style.display = "block";
        button.style.backgroundColor = "white";

        if(avatarImage.classList.contains('hidden')){
            avatarImage.classList.remove('hidden');
            
        }else{
            avatarImage.classList.add('hidden');
        }
        
    });
});
