import fs from "fs";
import { debounce } from "./debounce.js";
import { fetch } from "./aggregateDocs.lib.mjs";

const sendRequests = async () => {
	try {
		const response = await fetch("http://fake-server.com/data");

		// Aggregate the responses by lastName + fullName
		const aggregates = response.data.reduce((acc, item) => {
			const key = `${item.lastName} ${item.fullName}`;
			acc[key] = (acc[key] || 0) + 1;
			return acc;
		}, {});

		// Save aggregates to .aggregates.json using debounce function
		debounce(() => {
			fs.writeFileSync(".aggregates.json", JSON.stringify(aggregates));
		}, 5000)();
	} catch (error) {
		console.error("Error:", error);
	}
};

const benchmark = async () => {
	const startTime = Date.now();

	for (let i = 0; i < 100000; i++) {
		await sendRequests();
	}

	const endTime = Date.now();
	const elapsedTime = endTime - startTime;

	console.log("Benchmark completed.");
	console.log(`Elapsed Time: ${elapsedTime}ms`);
};

export { sendRequests, benchmark };
