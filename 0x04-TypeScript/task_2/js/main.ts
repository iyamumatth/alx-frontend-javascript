// Interface of directors
interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

// Interface of teachers
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Class director
class Director implements DirectorsInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

// Teacher Class
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting work';
	}
}

function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
	if (salary as number && salary < 500) return new Teacher();
	else return new Director();
}

	console.log(createEmployee('Harley', 'Searle', 200));
	console.log(createEmployee('Alex', 'Ferguson', 1000));
	console.log(createEmployee('Jacob', 'Zuma', '$500'));

// function IsDirector
function IsDirector(employee: Director | Teacher): employee is Director {
	return (employee instanceof Director) ? true: false;
}

//function executeWork
function executeWork (employee: Director | Teacher): string {
	return IsDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee('Guillaume', 'Salva', 200)));
console.log(executeWork(createEmployee('Julien', 'Barbier', 1000)));

