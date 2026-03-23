/**
 * Wildcard test runner
 *
 * @author Tegar Wijaya Kusuma
 * @date 23 March 2026
 */

import { expect, it } from "bun:test";
import { smokeApi } from "../src/app";
import { availableEndpointsParam, type WildcardError } from "../src/types";

const BASE_URL = Bun.env.BASE_URL ?? "http://localhost:3000";

let app: typeof smokeApi;
app = smokeApi;

it.each([
	`${BASE_URL}/101`,
	`${BASE_URL}/healthy`,
	`${BASE_URL}/pingy`,
	`${BASE_URL}/echooo`,
	`${BASE_URL}/envvv`,
])("Should return 404 fields on %s", async (url) => {
	const response = await app.handle(new Request(url, { method: "GET" }));

	expect(response.status).toBe(404);
	const body = (await response.json()) as WildcardError;
	expect(body).toHaveProperty("error", "Not Found");
	expect(body).toHaveProperty("timestamp");
	expect(body.availableEndpoints).toEqual(availableEndpointsParam);
	expect(body.availableEndpoints).toBeArray();
});
