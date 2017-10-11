import { Person } from './../models/person';

export const SETPEOPLE: string = 'SETPEOPLE';

export function peopleReducer (state: Person[] = [], action): Person[] {
    switch (action.type) {
        case SETPEOPLE:
            return action.payload;
        default:
            return state;
    }
};

export const mainReducer: {} = { people: peopleReducer };