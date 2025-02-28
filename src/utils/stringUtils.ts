/**
 * Capitalizes the first letter of
 * the passed text string
 */
export function capitalizeFirstLetter(text: string) {
  const firstLetter = text[0];
  const restOfWord = text.slice(1);

  return firstLetter.toUpperCase() + restOfWord;
}
