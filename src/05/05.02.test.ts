import type {CityType} from "../02/02_02.ts";
import {beforeEach, expect} from "vitest";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05.02.ts";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {id: 3, buildedAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}},
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount: 200, address: {street: {title: "Central Str"}}},
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {street: {title: "South Str"}}}
        ],
        citizensNumber: 1000000
    }
})

test('list of streets titles of government buildings', () => {
    const streetsTitles = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsTitles.length).toBe(2)
    expect(streetsTitles[0]).toBe("Central Str")
    expect(streetsTitles[1]).toBe("South Str")

})

test('list of streets titles', () => {
    const streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3)
    expect(streetsNames[0]).toBe('White street')
    expect(streetsNames[1]).toBe('Happy street')
    expect(streetsNames[2]).toBe('Happy street')

})

test('create greeating message for streets', () => {
    const greetingMessages = createMessages(city.houses)

    expect(greetingMessages.length).toBe(3)
    expect(greetingMessages[0]).toBe('Hello guys from White street')
    expect(greetingMessages[1]).toBe('Hello guys from Happy street')
    expect(greetingMessages[2]).toBe('Hello guys from Happy street')
})