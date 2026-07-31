const age = [18, 20, 22, 1, 100, 98, 14]

const pridicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]

//<160
const cheapPricate = (courses: CourseType) => {
    return courses.price < 160
}