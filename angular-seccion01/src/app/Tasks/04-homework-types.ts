interface SuperHero {
    name: String;
    age: number;
    address: Address;
    showAddress: () => String;
}


interface Address {
    Street: String;
    pais: String;
    ciudad: String;
}

const superHeroe: SuperHero = {
    name: 'Vision',
    age: 37,
    address: {
        Street: 'Aveniun dash',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log(address);




export { };