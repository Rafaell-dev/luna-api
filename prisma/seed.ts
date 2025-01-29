import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const defaultPassword = process.env.LUNA_PASSWORD || 'luna1234';
    await prisma.user.deleteMany();

    const users = await prisma.user.createMany({
        data: [
            {
                id: '1',
                name: 'Luna',
                email: 'luna@anjotech.com',
                password: await hash(defaultPassword, 10),
                updatedAt: new Date(),
                createdAt: new Date(),
            }
        ]
    });

    console.log(`${users.count} users seeded`);
}

main()
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});