import { Component, OnInit } from '@angular/core';
import { Game } from "../../providers/game";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent{
    public images = {
        rock:'/assets/img/rock.png',
        paper: '/assets/img/paper.png',
        scissors:'/assets/img/scissors.png'
    }

    constructor(public game:Game) { }

}
