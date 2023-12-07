import { Component } from '@angular/core';
import { Charactere } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    
    constructor( public DbzService: DbzService){
        
    }
}