import { describe } from "node:test";
//
export const log = console.log;
export const suite = describe;
/**
 * getRandomInt generates randomized integer number
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
}
