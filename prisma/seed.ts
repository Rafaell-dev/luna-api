import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();

    const users = await prisma.user.createMany({
        data: [
            {
                id: '1',
                name: 'Luna',
                email: 'luna@anjotech.com',
                password: '$2y$10$LaI3PYSEP1KsCd.Tgm4E9eHplhLDRoOr3wpfdJAqykJU7RAZ7iCS6',
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