/**
 * Capitalizes the first letter of
 * the passed text string
 */
export function capitalizeFirstLetter(text: string) {
  const firstLetter = text[0];
  const restOfWord = text.slice(1);

  return firstLetter.toUpperCase() + restOfWord;
}

/**
 * Splits text on camel case
 */
function splitCamelCase(text: string) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .join(" ");
}

/**
 * Splits words and capitalized the first
 * character in the sentance
 */
export function splitAndCapitalize(text: string) {
  const splitWords = splitCamelCase(text);
  return capitalizeFirstLetter(splitWords);
}
