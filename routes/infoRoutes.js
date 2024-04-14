import streamingAvailability from "streaming-availability"
const RAPID_API_KEY = "074d660253msh61cfcb4ead0358ap1637b6jsne58c02a54388";
const client = new streamingAvailability.DefaultApi(new streamingAvailability.Configuration({apiKey: RAPID_API_KEY}));
const country = "cz";

const imdbId = "tt0468569";
client.getById({
    imdbId: imdbId,
}).then(response => {
    const result = response.result;
    for(let streamingOption of result.streamingInfo[country]) {
        let output = `${result.title} (${result.year}) is available on ${streamingOption.service} via ${streamingOption.streamingType} at link ${streamingOption.link}`;
        if(streamingOption.quality != null) {
            output += ` with ${streamingOption.quality.toUpperCase()} quality`;
        }
        if(streamingOption.price != null) {
            output += ` for ${streamingOption.price.formatted}`;
        }
        console.log(output);
        resultDisplay.textContent = output;
    }
}).catch(error => {
    console.log(error);
    resultDisplay.textContent = error;

});

module.exports = client;