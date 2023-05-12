import { test as baseTest } from "@playwright/test";

type Azman = {
    hey: string;
}


const fixture = baseTest.extend<Azman>({
    hey: "I am ",

})

export const test = fixture;
export const assert = fixture.expect
export const describe = fixture.describe;