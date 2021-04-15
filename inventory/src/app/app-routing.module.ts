import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory/inventory.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path : '', redirectTo : 'inventory', pathMatch: 'full'},
  {path: 'inventory', component : InventoryComponent},
];

@NgModule({declarations: [InventoryComponent],
  imports: [BrowserModule,HttpClientModule,RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"}),FormsModule],
  exports: [RouterModule],
  providers: [InventoryService]
})
export class AppRoutingModule { }
