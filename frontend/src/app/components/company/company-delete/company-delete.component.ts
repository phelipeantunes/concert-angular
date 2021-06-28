import { Company } from './../company.models';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.scss']
})
export class CompanyDeleteComponent implements OnInit {
  company: Company
  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.companyService.readById(id).subscribe(company => {
      this.company = company
    })
  }
  deleteCompany(): void {
    this.companyService.delete(`${this.company.id}`).subscribe(() => {
      this.companyService.showAlert("Empresa excluida!")
      this.router.navigate(['/empresas'])
    })
  }
  back(): void {
    this.router.navigate(['/empresas'])
  }
}
