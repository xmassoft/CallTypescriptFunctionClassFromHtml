

class MyPersonClass {
  name: string;
  surname: string;
 
  constructor(nom: string, llinatge:string) {
    this.name = nom;
	this.surname = llinatge;
  }
 
  getFullName(): string {
    return "Hello from Class, " + this.name + " " + this.surname;
  }
  
}

export default MyPersonClass;