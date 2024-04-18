function Human(name, gender) {
    this.name = name; 
    this.gender = gender; 
}

function Flat(){
    this.inhabitants = []; 

    this.addHabitant = function(human){
        if(human instanceof Human){
            this.inhabitants.push(human);
            return this.inhabitants;
        }else {
            return 'Error'; 
        }
    }
}

function Building(maxFlats){
    this.flats = [];
    this.maxFlats = maxFlats;

    this.addFlat = function(flat){
        if(flat instanceof Flat && this.flats.length < this.maxFlats){
            this.flats.push(flat);
            return this.flats;
        }else {
            return 'Error';
        }
    }
}

const Max = new Human('Max', 'male');
const Olga = new Human('Olga', 'female');
const Bob = new Human('Bob', 'male');
const Nik = new Human('Nik', 'male');

const first = new Flat();
const second = new Flat();
const third = new Flat();
const forth = new Flat();

first.addHabitant(Olga);
first.addHabitant(Max);

second.addHabitant(Bob); 
second.addHabitant(Nik);

const a4 = new Building(3);
a4.addFlat(first);
a4.addFlat(second);
a4.addFlat(third);

console.log(a4);