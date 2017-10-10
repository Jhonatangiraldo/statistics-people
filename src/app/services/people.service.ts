import { Person } from './../models/person';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  people: Person[] = [
    { id: 1, firstName: 'Waylon', lastName: 'Dalton', age: 12, city: 'New York', sex:'M', isWorking: true },
    { id: 2, firstName: 'Justine', lastName: 'Henderson', age: 34, city: 'Venice', sex:'F', isWorking: false  },
    { id: 3, firstName: 'Abdullah', lastName: 'Lang', age: 34, city: 'Hong Kong', sex:'F', isWorking: true  },
    { id: 4, firstName: 'Marcus', lastName: 'Cruz', age: 23, city: 'Hong Kong', sex:'M', isWorking: true  },
    { id: 5, firstName: 'Thalia', lastName: 'Cobb', age: 12, city: 'London', sex:'F', isWorking: false  },
    { id: 6, firstName: 'Mathias', lastName: 'Little', age: 23, city: 'Chefchaouen', sex:'M', isWorking: true  },
    { id: 7, firstName: 'Eddie', lastName: 'Randolph', age: 43, city: 'Paris', sex:'F', isWorking: true  },
    { id: 8, firstName: 'Angela', lastName: 'Walker', age: 43, city: 'Amsterdam', sex:'F', isWorking: false  },
    { id: 9, firstName: 'Lia', lastName: 'Shelton', age: 34, city: 'Petersburg', sex:'F', isWorking: true  },
    { id: 10, firstName: 'Hadassah', lastName: 'Hartman', age: 34, city: 'Beirut', sex:'F', isWorking: true  },
    { id: 11, firstName: 'Joanna', lastName: 'Shaffer', age: 12, city: 'Kyoto', sex:'F', isWorking: false  },
    { id: 12, firstName: 'Jonathon', lastName: 'Sheppard', age: 87, city: 'Queenstown', sex:'M', isWorking: true  },
    { id: 13, firstName: 'Enzo', lastName: ' Brandt', age: 45, city: 'Barcelona', sex:'M', isWorking: true  },
    { id: 14, firstName: 'Bo', lastName: 'Shannon', age: 23, city: 'Singapore', sex:'M', isWorking: false  },
    { id: 15, firstName: 'Crystal', lastName: 'Sharp', age: 34, city: 'Havana', sex:'F', isWorking: false  },
    { id: 16, firstName: 'Richard', lastName: 'Ramos', age: 76, city: 'Florence', sex:'M', isWorking: true  },
    { id: 17, firstName: 'Caiden', lastName: 'Cross', age: 45, city: 'Sydney', sex:'F', isWorking: false  },
    { id: 18, firstName: 'Tanner', lastName: 'Hughes', age: 76, city: 'Lisbon', sex:'M', isWorking: false  },
    { id: 19, firstName: 'Darion', lastName: 'Green', age: 21, city: 'Jaipur', sex:'M', isWorking: true  },
    { id: 20, firstName: 'Marquise', lastName: 'Obrien', age: 45, city: 'Lucerne', sex:'M', isWorking: true  },
    { id: 21, firstName: 'Lennon', lastName: 'Dougherty', age: 23, city: 'Shanghai', sex:'M', isWorking: false  },
    { id: 22, firstName: 'Deanna', lastName: 'Strong', age: 3, city: 'Rome', sex:'F', isWorking: true  },
    { id: 23, firstName: 'Carlee', lastName: 'Hester', age: 4, city: 'Bruges', sex:'F', isWorking: false  },
    { id: 24, firstName: 'Kellen', lastName: 'Owens', age: 25, city: 'Stockholm', sex:'F', isWorking: false  },
  ];

  public getPeople(): Observable<Person[]> {
    return Observable.create( (observable) => {
      observable.next(this.people);
    });
  }

}
