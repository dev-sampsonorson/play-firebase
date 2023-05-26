/**
 * Get image prompt
 * @param {string} query The title won
 * @return {string} The generated prompt
 */
export function getImagePrompt(query: string): string {
  // eslint-disable-next-line max-len
  return `Generate an image of a triumphant scene depicting Manchester United celebrating a championship victory. Capture the essence of joy, exhilaration, and success as players and fans unite in jubilation. Showcase the team\'s iconic red jerseys, their logo, and any relevant elements that signify the achievement. Portray the elation on the faces of players, their raised arms, and the trophy held high in the air. Ensure the atmosphere conveys the energy of a historic moment and the pride associated with winning a ${query}.`
};
