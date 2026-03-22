/**
 * @file app.ts
 *
 *
 *
 * @author Tegar Wijaya Kusuma
 * @date 23 March 2026
 */

import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { NotFoundException } from "./errors/error";
import { availableEndpointsParam } from "./types";

const API_VERSION = Bun.env.API_VERSION ?? "v1";
const BUN_IMAGE_VERSION = Bun.env.BUN_IMAGE_VERSION ?? "oven/bun:1.3.10-slim";

export const smokeApi = new Elysia()
	.onError(({ error, set }) => {
		const extra: Record<string, unknown> = {};

		if (error instanceof NotFoundException) {
			set.status = error.status;
			extra.availableEndpoints = error.availableEndpoints;
		}

		return {
			error:
				extra.error ??
				(error instanceof Error ? error.message : "Unknown error"),
			timestamp: new Date().toISOString(),
			...extra,
		};
	})

	.get("/ping", ({ set }) => {
		set.status = 200;
		return {
			ok: true,
			version: API_VERSION,
			image: BUN_IMAGE_VERSION,
		};
	})

	.use(swagger())

	.all("/*", () => {
		throw new NotFoundException(availableEndpointsParam);
	});
