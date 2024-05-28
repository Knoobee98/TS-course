//class

export class User {
    name: string;

    constructor(name: string, public age: number){
        this.name = name
    }

    setName(value1: string): void {
        this.name = value1
    }

    getName = (): string => {
        return this.name
    }
}

// public : bisa diakses ke semua class / diluar class
// private : hanya bisa diakses di dalam class tersebut, dan class turunannya
// protected : hanya bisa diakses di dalam class itu sendiri

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin"

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };

    constructor(phone:string, name:string, age:number){
        super(name, age)
        this.phone = phone
    }

    set email(value:string){
        this._email = value
    }

    get email(): string{
        if(this._email.length < 5){
            return "email salah, coba isi yang benar"
        } else {
            return this._email
        }
    }
}

// let admin = new Admin("08211991", "adrian", 25)

// admin.getRole()
// admin.getName()
// admin.setName("fauzan")

let admin = Admin.getRoleName;

console.log(admin)

