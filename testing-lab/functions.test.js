require('./functions.js')

const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

describe('test returnTwo and greeting', () => {
    test('return two should equal 2', () => {
        expect(returnTwo()).toBe(2)
    })
    test('greet the user', () => {
        expect(greeting('James')).toBe('Hello, James')
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
})

describe('math functions', () => {
    test('multiply num1 and num2', () => {
        expect(multiply(3, 3)).toBe(9)
        expect(multiply(5, 100)).toBe(500)
    })
    test('subtract num2 from num1', () => {
        expect(subtract(5, 3)).toBe(2)
        expect(subtract(10, 7)).toBe(3)
    })
    test('divide num1 by num2', () => {
        expect(divide(9, 3)).toBe(3)
        expect(divide(100, 10)).toBe(10)
    })
    test('add num1 and num2', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })
})

