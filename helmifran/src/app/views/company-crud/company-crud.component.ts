import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-company-crud',
  templateUrl: './company-crud.component.html',
  styleUrls: ['./company-crud.component.css']
})
export class CompanyCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de empresa',
      icon: 'storefront',
      routeUrl: '/company'
    }
  }

  ngOnInit(): void {
  }

  navigateToCompanyCreate(): void {
    this.router.navigate(['/company/create'])
  }

}
