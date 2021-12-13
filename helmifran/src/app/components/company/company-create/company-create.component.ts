import { Company } from './../company.model';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  company: Company = {
    nomeFantasia: '' ? '' : null,
    razaoSocial: '' ? '' : null,
    qtdeFuncionarios: '' ? 0 : null,
    active: true ? true : false,
  }

  constructor(private companyService: CompanyService,
      private router: Router) { }

  ngOnInit(): void { }

  createCompany(): void {
    this.companyService.create(this.company).subscribe(() => {
      this.companyService.showMessage('Empresa criada!')
      this.router.navigate(['/company'])
    })

  }

  cancel(): void {
    this.router.navigate(['/company'])
  }
}
