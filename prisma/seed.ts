import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create some users
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "hashedpassword", // Use bcrypt to hash in real-world apps
      role: "USER",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Doe",
      email: "janedoe@example.com",
      password: "hashedpassword",
      role: "ADMIN",
    },
  });

  // Create some jobs
  await prisma.job.create({
    data: {
      title: "Frontend Developer",
      description: "Looking for a skilled React developer.",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time", // ✅ Add this required field
      postedById: user1.id,
    },
  });
  
  await prisma.job.create({
    data: {
      title: "Backend Developer",
      description: "Looking for a skilled Node.js developer.",
      company: "CodeHouse",
      location: "New York",
      type: "Part-time", // ✅ Add this required field
      postedById: user2.id,
    },
  });
  

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
