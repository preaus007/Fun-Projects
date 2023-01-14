const emojiButton = document.getElementById("emoji");
const emojiName = document.getElementById("emoji_name");

const emoji = [];

// api url
const api_url = "https://emoji-api.com/emojis?access_key=ee07c3d31d18dfdbe3d2f18f7b35636869c6d299";

// Defining async function
async function getEmoji(url) {
    // Storing response
    const response = await fetch(url);

    var data = await response.json();

    if (response) {
        hideloader();
        for(let i=0; i<1500; i++){
            emoji.push({
                code: data[i].character,
                name: data[i].unicodeName,
            });
        };
    }
    // console.log(emoji);
}

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

getEmoji(api_url);

emojiButton.addEventListener("click", () => {

    const randomNumber = Math.floor(Math.random() * emoji.length);

    emojiButton.innerText = emoji[randomNumber].code;
    emojiName.innerText = emoji[randomNumber].name;

});

