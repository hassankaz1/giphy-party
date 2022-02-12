//function to find gif from input and append to our body
async function getGif(input) {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "xgbQf0TJ1dqjP18zs42XOiUCpBWKI1V2",
            q: input
        }
    });

    //randomIDX will get a random index from our gif list
    let randomIdx = Math.floor(Math.random() * response.data.data.length);
    //we select a random gif and then get the url for its image
    let imageUrl = response.data.data[randomIdx].images.fixed_width.url
    //we first create a new img element and add the url as its source, then we append to our body
    $("<img>").attr("src", imageUrl).appendTo($("#gifs"));

}
//this will add event listener to our form to turn user input to gif
$("form").on("click", "#add", function (e) {
    e.preventDefault();
    let input = $("input").val();
    getGif(input);
})
//add event listener to our remove gif button to empty body
$("form").on("click", "#remove", function (e) {
    e.preventDefault();
    $("#gifs").text("");
})

