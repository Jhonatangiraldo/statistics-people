import { Subject } from 'rxjs/Subject';
import { Person } from './../models/person';

export interface DataTable {
    data: Person[];
    dataChange: Subject<{}>;
}
