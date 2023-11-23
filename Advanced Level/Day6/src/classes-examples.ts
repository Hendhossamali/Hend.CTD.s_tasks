//classes
//visiablity modifier 3 types 
//(puplic : by default, can accses from anywhere
//private:can accses the object inside class ,
//protected:can use inside class or any class inhert from it)
class User1 {
    private readonly usernamee: string;

    public constructor(usernamee: string) {
        this.usernamee = usernamee;
    }
    public getUsername(): string {
        return this.usernamee;
    }
}
const user1 = new User1("DODO");
//user1.usernamee ="Hend"
console.log(user1.getUsername());
//inhert
interface Shape {
    getArea: () => number;
}
//class inhert from interface by keywors implement 
class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {

    }
    public getArea(): number {
        return this.width * this.height;
    }
}
interface Animals {
    makeSound: () => void
}
//interface تطبيق بتاعه بيكون كلاس implemrnt
class Dogy implements Animals {
    public constructor() {
    }
    public makeSound(): void {
        console.log("HawHaw")
    }
}
class Caty implements Animals {
    public constructor() {
    }
    public makeSound(): void {
        console.log("Meaw")
    }
}
//override
//abstract