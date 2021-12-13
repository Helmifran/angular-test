import { Router, ActivatedRoute } from "@angular/router";
import { CompanyService } from "./../company.service";
import { Company } from "./../company.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company-delete",
  templateUrl: "./company-delete.component.html",
  styleUrls: ["./company-delete.component.css"],
})
export class CompanyDeleteComponent implements OnInit {
  company: Company = {
    id: 0,
    active: false,
  }

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.readById(id).subscribe((company) => {
      this.company = company;
    });
  }

  deleteCompany(): void {
    this.companyService.delete(this.company.id).subscribe(() => {
      this.companyService.showMessage("Empresa excluida com sucesso!");
      this.router.navigate(["/company"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/company"]);
  }
}
