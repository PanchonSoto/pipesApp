import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'    
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayusculads:boolean=true):string{
    /* if(enMayusculads){
            return value.toUpperCase();
        }else{
            return value.toLocaleLowerCase(); 
        } */

        return ( enMayusculads )? value.toUpperCase() : value.toLocaleLowerCase();
    }
}