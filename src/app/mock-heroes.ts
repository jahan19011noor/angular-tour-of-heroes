import { Hero } from './hero';
export interface Flyer { canFly: boolean; }

export const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice', canFly: true},
    { id: 12, name: 'Narco', canFly: true},
    { id: 13, name: 'Bombasto', canFly: true},
    { id: 14, name: 'Celeritas', canFly: true},
    { id: 15, name: 'Magneta', canFly: false},
    { id: 16, name: 'RubberMan', canFly: false},
    { id: 17, name: 'Dynama', canFly: false},
    { id: 18, name: 'Dr IQ', canFly: false},
    { id: 19, name: 'Magma', canFly: false},
    { id: 20, name: 'Tornado', canFly: false},
]