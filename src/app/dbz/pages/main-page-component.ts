import { Component } from '@angular/core';
import { Charactere } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    
    public character: Charactere[] = [{
        name: 'Krilin',
        power: 2500
    },{
        name: 'vegeta',
        power: 7500
    },{
        name: 'aaaaa',
        power: 7500
    }]

    onNewCharacter( characer: Charactere):void{
        console.warn(characer)
    }
}