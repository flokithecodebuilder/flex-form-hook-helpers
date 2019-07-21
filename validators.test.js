const {
    isRequired,
    isEmail
} = require('./validators')

describe('isRequired Validator', () => {
    it('should return null if value exist', () => {
        expect(isRequired('message')('value')).toBe(null)
        expect(isRequired('message')(0)).toBe(null)
        expect(isRequired('message')(-2)).toBe(null)
    })

    it('should return the message as a string if there is no value', () => {
        expect(isRequired()('')).toBe('Field is required.')
        expect(isRequired(2)('')).toBe('2')
    })

})

describe('isEmail Validator', () => {
    it('should return null if there is a good email', () => {
        expect(isEmail()('aRandomEmail@gmail.com')).toBe(null)
        expect(isEmail()('random@random.uk')).toBe(null)
    })

    it('should return the message if there is a wrong email', () => {
        expect(isEmail()('asdasdqwe')).toBe('Email is not valid.')
        expect(isEmail('sth')('qowieu')).toBe('sth')
    })
})
