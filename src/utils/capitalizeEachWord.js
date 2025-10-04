export function capitalizeEachWord(sentence) {
    // Handle edge cases like empty string or non-string input
    if (typeof sentence !== "string" || sentence.length === 0) {
        return "";
    }

    return sentence
        .split(" ") // Split the string into an array of words
        .map((word) => {
            // For each word, capitalize its first letter and concatenate with the rest of the word
            if (word.length === 0) {
                return ""; // Handle empty words if any
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" "); // Join the capitalized words back into a single string
}
