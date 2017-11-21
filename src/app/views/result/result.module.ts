import { CommonModule } from "@angular/common";
import { ResultComponent } from "./result.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material";

@NgModule({
    declarations: [
      ResultComponent
    ],
    imports: [
        CommonModule, FlexLayoutModule,
        MatButtonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ResultComponent
            }
        ])
    ]
  })
  export class ResultModule { }