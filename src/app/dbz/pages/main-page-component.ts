import { Component } from '@angular/core';
import { Charactere } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    
    public character: Charactere[] = [{
        name: 'Krilin',
        power: 900
    },{
        name: 'goku',
        power: 9000
    }]
}