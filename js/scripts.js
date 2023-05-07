// Define password database
let passwordDatabase = {
    "facebook": "CatLover123",
    "instagram": "FortnitePro@",
    "youtube": "12345asd",
    "google": "qwerty"
  };
  
  
  let socialMediaLinks = document.querySelectorAll(".social-media-link");
  let revealPasswordButton = document.getElementById("reveal-password-button");
  let result = document.getElementById("result");
  
  // Define functions
  function revealPassword() {
    let selectedSocialMedia = null;
    
    // Find which social media link is selected
    socialMediaLinks.forEach(function(link) {
      if (link.classList.contains("selected")) {
        selectedSocialMedia = link.getAttribute("data-social-media");
      }
    });
    
    if (selectedSocialMedia) {
      if (passwordDatabase[selectedSocialMedia]) {
        result.textContent = `Your password for ${selectedSocialMedia} is: ${passwordDatabase[selectedSocialMedia]}`;
      } else {
        result.textContent = `There is no password stored for ${selectedSocialMedia}`;
      }
    } else {
      result.textContent = "Please click on a social media link";
    }
  }
  
  function selectSocialMedia() {
    socialMediaLinks.forEach(function(link) {
      link.classList.remove("selected");
    });
    // Select clicked social media link
    this.classList.add("selected");
  }
  
  socialMediaLinks.forEach(function(link) {
    link.addEventListener("click", selectSocialMedia);
  });
  
  revealPasswordButton.addEventListener("click", revealPassword);
  