const { z } = require('zod')

const creatAppliancesSchema = z.object({
    userId: z
        .string()
        .uuid({ message: 'Invalid UUID' })
        .min(1, { message: 'User ID is required.' }),
    appliancesName: z
        .string()
        .superRefine((value, ctx) => {
            const singleSpace = /^[a-zA-Z]+( [a-zA-Z]+)*$/
            if (!singleSpace.test(value)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Only single spaces and alphabetical letters are allowed.'
                })
            } else {
                return
            }
        })
        .min(1, { message: 'Appliances Name is required.' }),
    consumptionPerHr: z
        .coerce
        .number()
        .gt(0, { message: 'Consumption per hour must be greater than 0.' })
})

module.exports = {
    creatAppliancesSchema
}