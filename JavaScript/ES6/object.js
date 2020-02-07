const person = {
    name: 'Manjunatha',
    age: 25,
    /*greet: function(){
        console.log('Hi, i am '+this.name);
    }*/

    greet: function () {
        console.log('Hi, i am '+this.name);
    }
}
person.greet();

// creating the copy of one oject to another
// but the object contains the reference of other object (like array), that will not be copied
const secondPerson = Object.assign({}, person);

console.log(secondPerson);


const hobbies = ['sports', 'cooking'];
for (let hobbie of hobbies){
    console.log(hobbie);
}

const new_arr = hobbies.map((hobby) => {
    return 'Hobby:' + hobby;
});

console.log(new_arr);
