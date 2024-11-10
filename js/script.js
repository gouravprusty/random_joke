const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const joke = document.querySelector(".joke");
const button = document.querySelector(".button");

async function getJoke() {
    try{
        const result = await axios.get(URL);
        const data = result.data.joke;
        return data;
    }catch(err){
        return err;
    }
};
button.addEventListener("click", async () => {
    let jokeData = await getJoke();
    joke.innerText = jokeData;
});