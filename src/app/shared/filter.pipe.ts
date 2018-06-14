import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string) {
        filterString = filterString.toLowerCase();
        const finalArray = [];
        if (filterString === '' ) {
            return value;
        }
        for (const user of value) {
            const f = user.fname.toLowerCase();
            const l = user.lname.toLowerCase();
            if (f.includes(filterString) || l.includes(filterString)) {
                finalArray.push(user);
            }
        }
        return finalArray;
    }
}
