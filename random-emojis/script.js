const emojiButton = document.getElementById("emoji");
const emojiName = document.getElementById("emoji_name");

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=ee07c3d31d18dfdbe3d2f18f7b35636869c6d299");

    var data = await response.json();

    for(let i=0; i<1500; i++){
        emoji.push({
            code: data[i].character,
            name: data[i].unicodeName,
        });
    };
    // console.log(emoji);
}

getEmoji();

emojiButton.addEventListener("click", () => {

    const randomNumber = Math.floor(Math.random() * emoji.length);

    emojiButton.innerText = emoji[randomNumber].code;
    emojiName.innerText = emoji[randomNumber].name;

});