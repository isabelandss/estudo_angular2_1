//decorator: indicando que essa classe é um componente no sistema
//dentro de core tem o Component
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})

export class AppComponent { }