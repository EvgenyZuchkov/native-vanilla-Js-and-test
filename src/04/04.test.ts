import {expect, test} from "vitest";

test('should take old men older 90', () => {
    const age = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = age.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take cheap course', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]


    const cheapCourse = courses.filter(courses => courses.price < 160)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].title).toBe('CSS')
    expect(cheapCourse[1].title).toBe('React')
})

test('get only competed tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
    ]

    const competedTasks = tasks.filter(task => task.isDone)

    expect(competedTasks.length).toBe(2)
    expect(competedTasks[0].id).toBe(2)
    expect(competedTasks[1].id).toBe(4)
})