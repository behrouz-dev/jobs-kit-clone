import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!(global as any).prisma) {
//     (global as typeof globalThis & { prisma?: PrismaClient }).prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

export default prisma;