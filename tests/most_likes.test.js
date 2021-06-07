const listHelper = require('../utils/list_helper')
const blogs = [
    { title: 'blog 1', totalLikes: 2, author: 'Sean' },
    { title: 'blog 2', totalLikes: 6, author: 'John' },
    { title: 'blog 3', totalLikes: 12, author: 'Sean' },
    { title: 'blog 4', totalLikes: 23, author: 'John' },
    { title: 'blog 5', totalLikes: 27, author: 'Sean' },
]

describe('mostLikes', () => {
    test('author with the most total likes', () => {
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({ author: 'Sean', totalLikes: 41 })
    })
})
