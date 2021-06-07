const listHelper = require('../utils/list_helper')

describe('dummy', () => {
    test('dummy returns one', () => {
        const blogs = []
        const result = listHelper.dummy(blogs)

        expect(result).toBe(1)
    })

    test('of many blogs to be value 1', () => {
        expect(listHelper.dummy([1, 2, 3, 4, 5, 6])).toBe(1)
    })

    test('of empty array is one', () => {
        expect(listHelper.dummy([])).toBe(1)
    })
})
