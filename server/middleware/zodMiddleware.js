const { z } = require('zod')
const zodMiddleware = (schema) => {
  return (req, res, next) => {
   
   
    try {
      schema.parse(req.body)
      return next()
    } catch (error) {

      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(issue => ({
          message: issue.message
        }))

        console.log(errorMessages)
        return res
          .status(400)
          .json({ errors: errorMessages })
      } else {
        return res
          .status(500)
          .json({ error: "Internal Server Error" })
      }
    }
  }
}



module.exports = zodMiddleware