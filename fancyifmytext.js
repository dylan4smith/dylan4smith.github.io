// Alert message for testing purposes
alert("Hello, world!");

// Function to make text bigger
function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

// Function to apply styles based on selected radio button
function applyStyle() {
    var textArea = document.getElementById("userText");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to convert text to uppercase and append "-Moo" to the last word of each sentence
function makeTextUppercase() {
    var textArea = document.getElementById("userText");
    var text = textArea.value;
    var sentences = text.split(".");
    var modifiedSentences = sentences.map(function(sentence) {
        var words = sentence.trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        return words.join(" ");
    });
    textArea.value = modifiedSentences.join(". ").toUpperCase() + ".";
}
