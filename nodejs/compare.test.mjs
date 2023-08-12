/**
 * compare test suite
 * @task implement compare.mjs and tests as described
 * @level junior++, middle--
 * @estTime 2h-4h
 * @author https://plan9.tech
 */
import { it, test, todo, skip } from "node:test";
import assert from "node:assert";
import { sute } from "../lib.mjs";
import { compare } from "./compare.mjs";
//
let _id = 0;
const _doc = (data = {}) => {
	data._id = `${_id++}`;
	return data;
};
//
const docs = [];
docs.push(_doc({ profile: { age: 31, name: "Adriana Chechik" } }));
docs.push(_doc({ profile: { age: 23, name: "Hazel Moore" } }));
docs.push(_doc({ profile: { age: 32, name: "Stella Cox" } }));
//
const queryById = {
	_id: docs[0]._id,
};
const queryStrictByAgeInNestedObject = {
	"profile.age": 23,
};
const queryBy$gte = {
	"profile.age": { $gte: 30 },
};
const queryByNestedConditions = {
	$or: [{ "profile.age": 23 }, { "profile.age": { $gte: 32 } }],
};
//
suite("compare", (s) => {
	test("compare(docs[0], queryById) === true", (t) => {});
	test("compare(docs[1], queryStrictByAgeInNestedObject) === true", () => {});
	test("compare(docs[0], queryBy$gte) === true", () => {});
	test("compare(docs[0], queryByNestedConditions) === false", () => {});
	test("compare(docs[1], queryByNestedConditions) === true", () => {});
	test("compare(docs[2], queryByNestedConditions) === true", () => {});
});
