class Student {
    constructor(name) {
        this.name = name
    }


greet(){
    console.log(`Hi! My name is ${this.name}`);
    
    }

}


class ProtoStudent {
    university = 'Oxford'
}

const student = Reflect.construct(Student, ['Igor'])

// console.log(student._proto_ === Student.prototype);

Reflect.apply(student.greet, { name: 'tester' }, [])
console.log(Reflect.ownKeys(student));

Reflect.preventExtensions(student)

console.log(Reflect.isExtensible(student));


student.age = 25



console.log(student);
