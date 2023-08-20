/**
 * aggregateBillionDocs test suite
 * @task implement billion.mjs and tests as described
 * - Use fake server wich will return object with name to send 100 000 requests
 * - Agregate responses to by lastName + fullName
 * - Save agregates to the .aggregates.json file - create debounce function to ensure that aggregates saves not more often than 5 seconds
 * - Server will randomly return error
 * - Proprly handle error and ensure that exactly 100 000 success requests being handled
 * - Create test to benchmark performance of this procedure
 *
 * @level junior++, middle--
 * @estTime 2h-4h
 * @author https://plan9.tech
 */
import { before, describe, test } from "node:test";
import {
	Request,
	Response,
	fetch,
	http,
	listener,
} from "./aggregateDocs.lib.mjs";
import { log } from "../lib.mjs";
import { aggregateDocs } from "./aggregateDocs.mjs";
//
const server = http.createServer(listener);
describe("http server test", () => {
	test("this should be tested", async () => {
		const res = await fetch("http://localhost:3000");
		aggregateDocs(await fetch.json());
	});
});
