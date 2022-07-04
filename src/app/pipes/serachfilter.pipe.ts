import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SerachfilterPipe implements PipeTransform {

  transform(value: any | any,searchText: any ): any {
    if(value.length ===0) {
      return value;
    }
    return value.filter((users:any) =>{
      return users.first_name.indexOf(searchText) > -1;
    })
  }
  // user component table is an example for this pipe
}
