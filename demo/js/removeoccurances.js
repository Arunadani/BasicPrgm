let text = " The text occurrences may be deleted in a while";
let char = "e";
removeoccurences = occurrences(text, char);
console.log(removeoccurences);
function occurrences(text, char){
    if (text.length === 0)
    {
        return "";
    }
    if (text.charAt(0) === char)
    {
        return occurrences(
            text.substring(1), char);
    }
    return text.charAt(0) +
        occurrences(
            text.substring(1), char);
}
