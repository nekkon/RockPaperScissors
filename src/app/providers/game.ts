import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class Game {
    public result;
    constructor(public router:Router) { }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    play(player){
        let computer = this.getRandomInt(0,2);
        this.result = this.compete(player,computer);
        this.router.navigate(['/result'])
    }
    compete(player,computer){
        if(player == computer){
            return 'draw';
        } else if((player == 0 && computer == 2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)){
            return 'player';
        } else if((player == 2 && computer == 0) || (player == 0 && computer == 1) || (player == 1 && computer == 2)){
            return 'computer';
        } else {
            throw new Error('uncaught condition');
        }
    }

}
