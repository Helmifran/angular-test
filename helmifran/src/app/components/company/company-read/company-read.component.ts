import { CompanyService } from './../company.service';
import { Company } from './../company.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-read',
  templateUrl: './company-read.component.html',
  styleUrls: ['./company-read.component.css']
})
export class CompanyReadComponent implements OnInit {
    
  displayedColumns: string[] = ["avatarUrl", "razaoSocial", "qtdeFuncionarios", "active", "action"];
  dataSource: Company[] = [];
  public spinner = true;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.read().subscribe(company => {
      this.spinner = false
      this.dataSource = company;
    });
  }
  
    statusAtivoOuInativo(active: boolean): string {
    return active ? "Ativo" : "Inativo";
  }
  
}
