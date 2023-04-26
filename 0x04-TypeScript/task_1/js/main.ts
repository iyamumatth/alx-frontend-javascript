// Teachers Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string
  [propName: string]: any;
}

// Directors Interface
interface Directors extends Teacher {
  numberOfReports: number
}

// Creating a Teacher and a Director
const teacher3: Teacher = {
  firstName: 'John';
  lastName: 'Doe';
  location: 'Spain';
  fullTimeEmployee: false;
  contract: false;
};
console.log(teacher3);

const director1: Directors= {
  firstName: 'John';
  lastName: 'Doe';
  location: 'London';
  fullTimeEmployee: true;
  numbeOfReports: 17;
};
console.log(director1);
