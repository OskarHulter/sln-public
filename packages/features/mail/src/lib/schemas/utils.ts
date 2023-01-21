import { z } from 'zod'

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])
type Literal = z.infer<typeof literalSchema>
type Json = Literal | { [key: string]: Json } | Json[]
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
)

jsonSchema.parse({})

// Set schemas can be further contrainted with the following utility methods.

//   z.set(z.string()).nonempty() // must contain at least one item
// z.set(z.string()).min(5) // must contain 5 or more items
// z.set(z.string()).max(5) // must contain 5 or fewer items
// z.set(z.string()).size(5) // must contain 5 items exactly

// Maps
// const stringNumberMap = z.map(z.string(), z.number())

// type StringNumberMap = z.infer<typeof stringNumberMap>
// // type StringNumberMap = Map<string, number>
// Sets
// const numberSet = z.set(z.number())
// type NumberSet = z.infer<typeof numberSet>;
// // type NumberSet = Set<number>

// Unions
// Zod includes a built -in z.union method for composing "OR" types.

// const stringOrNumber = z.union([z.string(), z.number()])

// stringOrNumber.parse("foo") // passes
// stringOrNumber.parse(14) // passes
// Zod will test the input against each of the "options" in order and return the first value that validates successfully.

// For convenience, you can also use the.or method:

// const stringOrNumber = z.string().or(z.number())

// Tuples
// Unlike arrays, tuples have a fixed number of elements and each element can have a different type.

// const athleteSchema = z.tuple([
//   z.string(), // name
//   z.number(), // jersey number
//   z.object({
//     pointsScored: z.number(),
//   }), // statistics
// ])

// type Athlete = z.infer<typeof athleteSchema>
// // type Athlete = [string, number, { pointsScored: number }]
// A variadic("rest") argument can be added with the.rest method.

// const variadicTuple = z.tuple([z.string()]).rest(z.number())
// const result = variadicTuple.parse(["hello", 1, 2, 3]);
// // => [string, ...number[]];

// Discriminated unions
// A discriminated union is a union of object schemas that all share a particular key.

// type MyUnion =
//   | { status: "success"; data: string }
//   | { status: "failed"; error: Error };
// Such unions can be represented with the z.discriminatedUnion method.This enables faster evaluation, because Zod can check the discriminator key(status in the example above) to determine which schema should be used to parse the input.This makes parsing more efficient and lets Zod report friendlier errors.

// With the basic union method the input is tested against each of the provided "options", and in the case of invalidity, issues for all the "options" are shown in the zod error.On the other hand, the discriminated union allows for selecting just one of the "options", testing against it, and showing only the issues related to this "option".

// const myUnion = z.discriminatedUnion("status", [
//   z.object({ status: z.literal("success"), data: z.string() }),
//   z.object({ status: z.literal("failed"), error: z.instanceof(Error) }),
// ])

// myUnion.parse({ status: "success", data: "yippie ki yay" })
// Records
// Record schemas are used to validate types such as { [k: string]: number }.

// If you want to validate the values of an object against some schema but don't care about the keys, use z.record(valueType):

// const NumberCache = z.record(z.number())

// type NumberCache = z.infer<typeof NumberCache>
// // => { [k: string]: number }
// This is particularly useful for storing or caching items by ID.

// const userStore: UserStore = {}

// userStore["77d2586b-9e8e-4ecf-8b21-ea7e0530eadd"] = {
//   name: "Carlotta",
// } // passes

// userStore["77d2586b-9e8e-4ecf-8b21-ea7e0530eadd"] = {
//   whatever: "Ice cream sundae",
// } // TypeError
