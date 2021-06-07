const listHelper = require('../utils/list_helper')
const blogs = [
    { title: 'blog 1', totalLikes: 2, author: 'Sean' },
    { title: 'blog 2', totalLikes: 6, author: 'John' },
    { title: 'blog 3', totalLikes: 12, author: 'Sean' },
    { title: 'blog 4', totalLikes: 23, author: 'John' },
    { title: 'blog 5', totalLikes: 27, author: 'Sean' },
]

describe('totalLikes', () => {
    test('of empty list is zero', () => {
        expect(listHelper.totalLikes([])).toBe(0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        expect(
            listHelper.totalLikes([{ title: 'blog 1', totalLikes: 2 }])
        ).toBe(2)
    })

    test('of a blogger list is calculated right', () => {
        const result = listHelper.totalLikes(blogs)

        expect(result).toBe(70)
    })
})
