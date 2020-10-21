/* eslint-disable */
// const defaultConfig = require('./serverless/configloader')

const stage = process.env.STAGE || 'local'
process.env.STAGE = stage

module.exports = {
    input: 'app/apis',
    openapi: {
        inputFile: `http://localhost:3002/swagger-json`,
        mock: true,
    },
}

// http://localhost:3002/swagger/