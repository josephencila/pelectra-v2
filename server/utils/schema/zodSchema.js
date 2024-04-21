const { z } = require('zod')

const createAppliancesSchema = z.object({
    appliancesName: z
        .string()
        .min(1, { message: 'Appliances Name is a required.' })
        .superRefine((value, ctx) => {
            const singleSpace = /^[a-zA-Z]+( [a-zA-Z]+)*$/
            if (!singleSpace.test(value)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Only alphabetical letters & single space between are allowed.'
                })
            } else {
                return
            }
        }),
    consumptionPerHr: z
        .coerce
        .number()
        .min(0.000001,{message: "Consumption per hour is a required field."})
        .gt(0, { message: 'Consumption per hour must be greater than 0.' })
})

module.exports = {
    createAppliancesSchema
}