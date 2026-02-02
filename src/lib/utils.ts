/**
 * Calculates the animation delay for an element based on its index.
 *
 * @param {number} increment - The delay for each subsequent element.
 * @param {number} delay - The time between the delays of each element.
 * @param {number} initial - The index of the element. Default value is 1.
 * @returns {object} An object containing the animDelay style property.
*/
export const animDelay = (increment: number, delay: number, initial: number = 1) => {
  return {
    animationDelay: `${(increment + initial) * delay}s`
  }
}
