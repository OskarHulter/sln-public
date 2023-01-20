import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  const preference = await prisma.userPreference.create({
    // * connect: id: or disconnect (for adding and removing)
    data: {
      emailUpdates: true,
    },
  })

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Oskar Hulter',
  //     email: 'oskarhulter@gmail.com',
  //     age: 32,
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   select: {
  //     name: true,
  //     userPreference: { select: { id: true } },
  //   },
  // })

  // const users = await prisma.user.createMany({
  //   data: [{
  //     name: 'Oskar Hulter',
  //     email: 'oskarhulter@gmail.com',
  //     age: 32,
  //   },
  //   {
  //     name: 'Mr Double',
  //     email: 'dosTres@gmail.com',
  //     age: 23,
  //   }],
  // })

  const uniqueUser = await prisma.user.findUnique({
    where: {
      email: 'oskarhulter@gmail.com',
      //* name_email: {name,mail} for composite
    },
  })
  const firstUser = await prisma.user.findFirst({
    where: {
      email: 'oskarhulter@gmail.com',
      //* name_email: {name,mail} for composite
    },
  })
  const firstManyUser = await prisma.user.findMany({
    where: {
      email: 'oskarhulter@gmail.com',
      //* name_email: {name,mail} for composite
    },
    take: 2,
    orderBy: {
      age: 'desc',
    },
    //skip: 1,
    // distinct: ["name"]
  })
  const firstManyFUser = await prisma.user.findMany({
    where: {
      name: { in: ['Oskar', 'Oskar Hulter'] }, // * notIn lt (less) lte contains AND/NOT:[] every: createdAt: new Date()
    },
  })
  const updatedUser = await prisma.user.update({
    // * many math
    where: {
      email: 'x@z',
    },
    data: {
      email: 'asdfasdf',
    },
  })
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
