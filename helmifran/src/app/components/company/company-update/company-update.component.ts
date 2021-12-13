import { Company } from "./../company.model";
import { Router, ActivatedRoute } from "@angular/router";
import { CompanyService } from "./../company.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company-update",
  templateUrl: "./company-update.component.html",
  styleUrls: ["./company-update.component.css"],
})
export class CompanyUpdateComponent implements OnInit {
  company: Company = {
    nomeFantasia: '' ? '' : null,
    razaoSocial: '' ? '' : null,
    qtdeFuncionarios: '' ? 0 : null,
    active: true,
  }

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.companyService.readById(id).subscribe((company) => {
      this.company = company;
    });
  }

  updateCompany(): void {
    this.companyService.update(this.company).subscribe(() => {
      this.companyService.showMessage("Empresa atualizada com sucesso!");
      this.router.navigate(["/company"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/company"]);
  }
}
