import config from "./env.js";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: config.DATABASE_URL
});

const prisma = new PrismaClient({
    adapter,
    log: ["query"]
});

export default prisma;