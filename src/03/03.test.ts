import type {StudentType} from "../02/02.ts";
import {beforeEach, expect, test} from "vitest";
import {addTechnology, doesStudentLiveIn, madeStudentActive} from "./03.ts";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Jenya",
        age: 31,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML",
            },
            {
                id: 2,
                title: "CSS",
            },
            {
                id: 3,
                title: "React",
            }

        ]
    }
})

test('new tech skill should be added', () => {
    expect(student.technologies.length).toBe(3)
    addTechnology(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe('JS')
})

test('student should be active', () => {
    expect(student.isActive).toBe(false)
    madeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
