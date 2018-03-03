import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lol-history',
    templateUrl: './lol-history.component.html'
})
export class LolHistoryComponent implements OnInit {
    private games: any[] = [];


    ngOnInit() {
        for (let i = 0; i < 20; i++) {
            if (i % 2 === 0)
                this.games.push("Przegrana gierka przez afkera");
            else
                this.games.push("Przegrana gierka przez debila");
        }
    }
}
