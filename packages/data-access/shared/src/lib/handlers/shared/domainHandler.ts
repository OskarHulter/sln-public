import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function domainHandler() {
  await prisma.user.deleteMany()
  const preference = await prisma.userPreference.create({
    // * connect: id: or disconnect (for adding and removing)
    data: {
      emailUpdates: true,
    },
  })
  console.log('🚀 ~ file: domainHandler.ts:13 ~ domainHandler ~ preference', preference)

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
  console.log('🚀 ~ file: domainHandler.ts:51 ~ domainHandler ~ uniqueUser', uniqueUser)
  const firstUser = await prisma.user.findFirst({
    where: {
      email: 'oskarhulter@gmail.com',
      //* name_email: {name,mail} for composite
    },
  })
  console.log('🚀 ~ file: domainHandler.ts:58 ~ domainHandler ~ firstUser', firstUser)
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
  console.log('🚀 ~ file: domainHandler.ts:71 ~ domainHandler ~ firstManyUser', firstManyUser)
  const firstManyFUser = await prisma.user.findMany({
    where: {
      name: { in: ['Oskar', 'Oskar Hulter'] }, // * notIn lt (less) lte contains AND/NOT:[] every: createdAt: new Date()
    },
  })
  console.log('🚀 ~ file: domainHandler.ts:77 ~ domainHandler ~ firstManyFUser', firstManyFUser)
  const updatedUser = await prisma.user.update({
    // * many math
    where: {
      email: 'x@z',
    },
    data: {
      email: 'asdfasdf',
    },
  })
  console.log('🚀 ~ file: domainHandler.ts:87 ~ domainHandler ~ updatedUser', updatedUser)
}
export async function dbConnectionHandler() {
  domainHandler()
    .catch((e) => {
      console.error(e.message)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

export default domainHandler
