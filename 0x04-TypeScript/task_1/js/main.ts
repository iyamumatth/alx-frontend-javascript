// Teachers Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string
  [propName: string]: any;
}


// Creating a Teacher 
const teacher3: Teacher = {
  firstName: Josh;
  lastName: Alexander;
  location: Spain;
  fullTimeEmployee: false;
  contract: false;
};

console.log(teacher3);
