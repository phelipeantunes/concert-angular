import { Company } from './../company.models';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-read',
  templateUrl: './company-read.component.html',
  styleUrls: ['./company-read.component.scss']
})
export class CompanyReadComponent implements OnInit {
  company: Company[]
  displayedColumns = ['id', 'name', 'type', 'cnpj', 'foundation', 'size', 'action'];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.read().subscribe(company => {
      this.company = company
    })
  }

}
