import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
      MenuComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MenuComponent
            }
        ])
    ]
  })
  export class MenuModule { }