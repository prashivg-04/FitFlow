import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const { PrismaClient } = pkg;

// Use the PostgreSQL adapter with your DATABASE_URL
const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Prisma is working:", result);
  } catch (error) {
    console.error("❌ Prisma test failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();