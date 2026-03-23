/**
 * Entrypoint here
 *
 * @author Tegar Wijaya Kusuma
 * @date 23 March 2026
 */

import { smokeApi } from "./src/app";

const PORT = Bun.env.PORT ?? 3000;
const HOSTNAME = Bun.env.HOSTNAME ?? "0.0.0.0";

smokeApi.listen({ port: PORT, hostname: HOSTNAME });

console.log(`Elysia listening at http://localhost:${smokeApi.server?.port}`);
