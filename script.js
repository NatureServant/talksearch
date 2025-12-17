let inputBox = document.getElementById("inputBox");
let voiceBtn = document.getElementById("voiceBtn");
let googleBtn = document.getElementById("googleBtn");
let bingBtn = document.getElementById("bingBtn");
let wikiBtn = document.getElementById("wikiBtn");
let pexelBtn = document.getElementById("pexelBtn");


voiceBtn.addEventListener("click", () => {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function (event) {
        let transcript = event.results[0][0].transcript;
        inputBox.value = transcript;
        if (inputBox.value !== ""){
            search();
        }
    }
});

function search() {
    let query = inputBox.value;
        if (googleBtn.checked) {
            window.open(`https://www.google.com/search?q=${query}`, "_blank");
        }
        else if (bingBtn.checked) {
            window.open(`https://www.bing.com/search?q=${query}`, "_blank");
        }
        else if (wikiBtn.checked) {
            window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
        }
        else if (pexelBtn.checked) {
            window.open(`https://www.pexels.com/search/${query}/`, "_blank");
        }
}
window.addEventListener("keydown", function (e) {
    if (inputBox.value !== "") {
        if (e.key === "Enter") {
            e.preventDefault();
            search();
        }
    }
});