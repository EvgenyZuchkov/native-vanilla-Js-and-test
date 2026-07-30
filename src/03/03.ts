import type {StudentType} from "../02/02.ts";
import type {CityType, GovernmentBuildingType, HouseType} from "../02/02_02.ts";


export const sum = (a: number, b: number) => a + b;

export const addTechnology = (student: StudentType, technology: string) => {
    student.technologies.push({
        id: Math.random(),
        title: technology,
    })
}

export const madeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city
}

export const addMoneyToBudget = (city: GovernmentBuildingType, addBudget: number) => {
    city.budget += addBudget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (staff: GovernmentBuildingType, count: number) => {
    staff.staffCount -= count
}
export const toHireStaff = (staff: GovernmentBuildingType, count: number) => {
    staff.staffCount += count
}