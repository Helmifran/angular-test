import { CompanyDeleteComponent } from './components/company/company-delete/company-delete.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { CompanyCrudComponent } from "./views/company-crud/company-crud.component";
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "company",
    component: CompanyCrudComponent
  },
  {
    path: "company/create",
    component: CompanyCreateComponent
  },
  {
    path: "company/update/:id",
    component: CompanyUpdateComponent
  },
  {
    path: "company/delete/:id",
    component: CompanyDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
