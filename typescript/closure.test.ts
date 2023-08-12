/**
 * closure is a test suite for testing typescript knowledge
 * @task implement proper .d.ts file for closure.ts
 * @level junior
 * @estTime 1h
 * @author https://plan9.tech
 */
import { test } from "node:test";
import { suite } from "../lib.mjs";
import { closure } from "./closure";
suite('closure', () => {
	test('mock test', () => {
		closure('john', 'dorean', (result) => {})
	})
})