import { CommonModule } from "@angular/common";
import { PlayComponent } from "./play.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from "@angular/material";

@NgModule({
    declarations: [
      PlayComponent
    ],
    imports: [
        CommonModule, FlexLayoutModule,
        MatTooltipModule,
        RouterModule.forChild([
            {
                path: '',
                component: PlayComponent
            }
        ])
    ]
  })
  export class PlayModule { }