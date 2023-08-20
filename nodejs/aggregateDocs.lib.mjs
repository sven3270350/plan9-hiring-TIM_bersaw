import { getRandomInt, log } from "../lib.mjs";
/**
 *
 */
let mockServer;
/**
 *
 */
export class Request {
	/**
	 * url
	 */
	url;
	/**
	 * constructor
	 * @param {string} url
	 */
	constructor(fullUrl) {
		const [protocol, urlWithPort] = fullUrl.split(":/");
		const [url, port] = urlWithPort.split(":");
		this.url = `${url}`;
		console.log(this.url);
	}
}
/**
 *
 */
export class Response {
	// res.writeHead(200, { 'Content-Type': 'text/plain' });
	// res.end('okay');
	// res.setHeader("Content-Type", "application/json");
	/**
	 *
	 */
	headers = {};
	/**
	 *
	 */
	status = 200;
	/**
	 *
	 */
	body = "";
	/**
	 *
	 * @param {number} status
	 * @param {object} headers
	 */
	writeHead(status, headers = {}) {
		this.status = status;
		log(headers);
		Object.entries(headers).forEach((ent) => {
			log(ent);
			//this.setHeader(name, value);
		});
	}
	/**
	 * setHeader
	 * @param {string} name
	 * @param {string} value
	 */
	setHeader(name, value) {
		this.headers[name] = value;
	}
	/**
	 * end
	 * @param {string} body
	 */
	end(body = "") {
		if (getRandomInt(0, 100) === 90) {
			this.abort();
			return;
		}
		this.body = body;
	}
	/**
	 * abort
	 */
	abort() {
		this.status = 500;
		this.body = undefined;
	}
}
/**
 * listener
 * @param {Request} req
 * @param {Response} res
 */
export function listener(req, res) {
	console.log(req);
	res.setHeader("content-type", "application/json");
	res.end(JSON.stringify({ name: "John" }));
}
/**
 * Server has the same API as node:http server but not starts real server
 */
export class Server {
	/**
	 *
	 */
	requestListener;
	/**
	 * constructor
	 * @param {function} requestListener
	 */
	constructor(requestListener = listener) {
		this.requestListener = requestListener;
	}
	/**
	 * listen
	 * @param {string|number} port
	 * @param {string} host
	 */
	listen(port = 3000, host = "localhost") {}
	/**
	 * handleRequest
	 * @param {string} url
	 */
	async handleRequest(url) {
		const req = new Request(url);
		const res = new Response();
		await this.requestListener(req, res);
		return res;
	}
}
/**
 * fetch acts same way as standard fetch api except of precondition that it uses fake server
 * @param {string} url
 * @returns {Promise}
 */
export async function fetch(url) {
	const res = await mockServer.handleRequest(url);
	return {
		res,
		async text() {
			return res.body;
		},
		async json() {
			return JSON.parse(res.body);
		},
	};
}
//
export const http = {
	/**
	 * createServer creates mock server for testing
	 * @param {function(req, res):object} listener
	 */
	createServer(requestListener = (req, res) => {}) {
		return (mockServer = new Server(requestListener));
	},
};
