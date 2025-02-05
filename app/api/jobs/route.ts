import prisma from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function GET() {
  const jobs = await prisma.job.findMany();
  return NextResponse.json(jobs);
}
