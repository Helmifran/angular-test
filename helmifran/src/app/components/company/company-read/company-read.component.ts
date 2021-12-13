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
  
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.read().subscribe(company => {
      this.dataSource = company;
    })
  }
}
