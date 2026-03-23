/**
 * @file app.ts
 *
 * Custom class Error
 *
 * @author Tegar Wijaya Kusuma
 * @date 23 March 2026
 */

// Error thrown when an endpoint doesn't exist, wildcard error handler.
export class NotFoundException extends Error {
	status = 404;
	availableEndpoints: string[];

	constructor(availableEndpoints: string[]) {
		super("Not Found");
		this.availableEndpoints = availableEndpoints;
	}
}
