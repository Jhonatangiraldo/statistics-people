import { Person } from './../models/person';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  people: Person[] = [
    { id: 1, firstName: 'Waylon', lastName: 'Dalton', age: 12, city: 'New York', gender:'M', isWorking: true },
    { id: 2, firstName: 'Justine', lastName: 'Henderson', age: 34, city: 'Venice', gender:'F', isWorking: false  },
    { id: 3, firstName: 'Abdullah', lastName: 'Lang', age: 34, city: 'Hong Kong', gender:'F', isWorking: true  },
    { id: 4, firstName: 'Marcus', lastName: 'Cruz', age: 23, city: 'Hong Kong', gender:'M', isWorking: true  },
    { id: 5, firstName: 'Thalia', lastName: 'Cobb', age: 12, city: 'London', gender:'F', isWorking: false  },
    { id: 6, firstName: 'Mathias', lastName: 'Little', age: 23, city: 'Chefchaouen', gender:'M', isWorking: true  },
    { id: 7, firstName: 'Eddie', lastName: 'Randolph', age: 43, city: 'Paris', gender:'F', isWorking: true  },
    { id: 8, firstName: 'Angela', lastName: 'Walker', age: 43, city: 'Amsterdam', gender:'F', isWorking: false  },
    { id: 9, firstName: 'Lia', lastName: 'Shelton', age: 34, city: 'Petersburg', gender:'F', isWorking: true  },
    { id: 10, firstName: 'Hadassah', lastName: 'Hartman', age: 34, city: 'Beirut', gender:'F', isWorking: true  },
    { id: 11, firstName: 'Joanna', lastName: 'Shaffer', age: 12, city: 'Kyoto', gender:'F', isWorking: false  },
    { id: 12, firstName: 'Jonathon', lastName: 'Sheppard', age: 87, city: 'Queenstown', gender:'M', isWorking: true  },
    { id: 13, firstName: 'Enzo', lastName: ' Brandt', age: 45, city: 'Barcelona', gender:'M', isWorking: true  },
    { id: 14, firstName: 'Bo', lastName: 'Shannon', age: 23, city: 'Singapore', gender:'M', isWorking: false  },
    { id: 15, firstName: 'Crystal', lastName: 'Sharp', age: 34, city: 'Havana', gender:'F', isWorking: false  },
    { id: 16, firstName: 'Richard', lastName: 'Ramos', age: 76, city: 'Florence', gender:'M', isWorking: true  },
    { id: 17, firstName: 'Caiden', lastName: 'Cross', age: 45, city: 'Sydney', gender:'F', isWorking: false  },
    { id: 18, firstName: 'Tanner', lastName: 'Hughes', age: 76, city: 'Lisbon', gender:'M', isWorking: false  },
    { id: 19, firstName: 'Darion', lastName: 'Green', age: 21, city: 'Jaipur', gender:'M', isWorking: true  },
    { id: 20, firstName: 'Marquise', lastName: 'Obrien', age: 45, city: 'Lucerne', gender:'M', isWorking: true  },
    { id: 21, firstName: 'Lennon', lastName: 'Dougherty', age: 23, city: 'Shanghai', gender:'M', isWorking: false  },
    { id: 22, firstName: 'Deanna', lastName: 'Strong', age: 3, city: 'Rome', gender:'F', isWorking: true  },
    { id: 23, firstName: 'Carlee', lastName: 'Hester', age: 4, city: 'Bruges', gender:'F', isWorking: false  },
    { id: 24, firstName: 'Kellen', lastName: 'Owens', age: 25, city: 'Stockholm', gender:'F', isWorking: false  },
  ];

  public getPeople(): Observable<Person[]> {
    return Observable.create( (observable) => {
      observable.next(this.people);
    });
  }

}
