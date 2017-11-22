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

    /**
     * Executed when a player selects Rock, Paper, Scissors. 
     * At the end user is navigated to Result View
     * player:  selected value (0,1,2)
     * computer: computer's selected value (0,1,2)
     * result: 'player','computer','draw'
     * 0 stands for Rock
     * 1 stands for Paper
     * 2 stands for Scissors
     */
    play(player){
        let computer = this.getRandomInt(0,2); // Returns a random number from 0 to 2, computer choice
        this.result = this.compete(player,computer);
        this.router.navigate(['/result'])
    }

    /**
     * Executed when a game is player. Returns the winner, else draw.
     * Throws an error in case there is unexpected input
     * returns: 'player','computer','draw'
     */
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
