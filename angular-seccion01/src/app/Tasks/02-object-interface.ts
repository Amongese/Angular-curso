let skills: String[] = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue'];

interface Character {
    name: String;
    age: number;
    skills: String[];
    homeTown?: String;

}


const strider = {
    name: 'Wolverine',
    age: 56,
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue']
}

console.table(strider);

export { }