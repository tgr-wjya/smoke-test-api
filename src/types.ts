/**
 * @file types.ts
 *
 * Misc
 *
 * @author Tegar Wijaya Kusuma
 * @date 23 March 2026
 */

export interface WildcardError {
	error: string;
	timestamp: string;
	availableEndpoints?: string[];
}

export const availableEndpointsParam = [
	"GET /ping",
	"GET /env",
	"GET /echo",
	"GET /health",
];
