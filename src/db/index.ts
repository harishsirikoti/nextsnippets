import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

// to install prisma run 'npm install prisma';
// to initail 'npx prisma init --datasource-provider sqlite';
// to name data base 'npx prisma migrate dev';