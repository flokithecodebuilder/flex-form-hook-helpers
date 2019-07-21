const validator = require('validator')

/**
 * This function check if a value exist or not.
 * @param {string} [message = 'Field is required.']
 * @returns {Function} returns another function which check if the value exists.
 */
const isRequired = (message  = 'Field is required.') => v => {
    if(v || v === 0) return null
    return String(message)
}

/**
 * This function check if an email is correct or not.
 * @param {string} [message = 'Email is not valid.']
 * @returns {Function} returns another function which check if email is correct.
 */
const isEmail = (message = 'Email is not valid.') => v => {
    if(validator.isEmail(v)) return null
    return String(message)
}

module.exports = {
    isRequired,
    isEmail
}