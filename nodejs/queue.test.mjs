/**
 * queue test suite
 * @task implement queue.mjs and tests as described. do not use Promise.all
 * @level junior
 * @estTime 1h-2h
 * @author https://plan9.tech
 */
import { test } from "node:test";
import { suite } from "../lib.mjs";
import { queue } from "./queue.mjs";
import { getRandomInt } from "../lib.mjs";
//
const stack = [
	() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, getRandomInt(0, 10) * 1000);
		});
	},
	() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(2);
			}, getRandomInt(0, 10) * 1000);
		});
	},
	() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(3);
			}, getRandomInt(0, 10) * 1000);
		});
	},
];
suite("queue", async () => {
	test("JSON.stringify(await queue(stack)) === JSON.stringify([1, 2, 3])");
});
