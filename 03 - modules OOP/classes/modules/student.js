export class Student{
    #age;
    #subject;
    #name;

    constructor(age, name, subject = 'JavaScript'){
        this.#age = age;
        this.#subject = subject;
        this.#name = name;
        Object.seal(this);
    }

    giveGrade(grade){
        const newGrade = grade;

        console.log( this.#name, 'received an', newGrade, 'in', this.#subject);
    }

    getAge(){
        return this.#age;
    }
    getSubject(){
        return this.#subject;
    }
    getName(){
        return this.#name;
    }
    setAge(){
        this.#age++;
    }
}