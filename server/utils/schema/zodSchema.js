const { z } = require('zod')
const { getDaysInMonth } = require('../helper')
const appliancesSchema = z.object({
    appliancesName: z
        .string()
        .min(1, { message: 'Appliances Name is required.' })
        .max(50, { message: 'Maximum Appliances Name is 50 characters.' })
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
        .min(0.000001, { message: "Consumption per hour is required." })
        .gt(0, { message: 'Consumption per hour must be greater than 0.' })
})
const monthlyAppliancesSchema = appliancesSchema.extend({
    appliancesId: z
        .string()
        .uuid({ message: 'Invalid Appliances ID' })
        .min(1, { message: 'Appliances ID is required.' }),
    dailyUsage: z
        .number()
        .min(1, { message: "Daily Usage is required." })
        .max(24, { message: "Maximum Daily Usage is 24hrs." })
        .gt(0, { message: 'Daily Usage must be greater than 0.' }),
    daysInMonth: z
        .number()
        .min(1, { message: "Days in Month is required." })
        .gt(0, { message: 'Daily Usage must be greater than 0.' }),
    consumptionPerMonth: z
        .coerce
        .number()
        .min(0.000001, { message: "Consumption per month is required." })
        .gt(0, { message: 'Consumption per month must be greater than 0.' }),
    selectedAt: z
        .coerce
        .date({
            errorMap: (issue, { defaultError }) => ({
                message: issue.code === "invalid_date" ? "That's not a date!" : defaultError,

            }),
        })
}).superRefine((data, ctx) => {
    const days = getDaysInMonth(data.selectedAt)
    if (data.daysInMonth > days ) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Days in Month cannot be greaten than ${days}.`,
            path: ['daysInMonth']
        })
    } else {
        return
    }
});

const updateMonthlyAppliancesSchema = z.object({
    monthlyAppliancesId: z
    .string()
    .uuid({ message: 'Invalid Monthly Appliances ID' })
    .min(1, { message: 'Monthly Appliances ID is required.' }),
})


module.exports = {
    appliancesSchema,
    monthlyAppliancesSchema
}