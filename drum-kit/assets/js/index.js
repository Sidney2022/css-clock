

// sound player
var key_wrapper = document.querySelectorAll('.key-wrapper')
key_wrapper.forEach(key => {
    key.addEventListener('click', () => {
        var file = key.getAttribute("data-file")
        const audio = new Audio(`./assets/audio/${file}`);
        audio.play()
        key.classList.add('sound-active')
        audio.onended = () =>   key_wrapper.classList.remove('sound-active')
    })
})



// theme switcher
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".theme-toggle");
    const body = document.body;
  
    // Check if the user has a stored theme preference
    if (localStorage.getItem("theme") === "light") {
      body.classList.remove("dark-mode");
      toggleButton.textContent = "🌙"; 
    } else {
        body.classList.add("dark-mode");
        toggleButton.textContent = "🌞"; 
    }
  
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggleButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        toggleButton.textContent = "🌞"; 
        localStorage.setItem("theme", "dark");
      }
    });
  });
  
