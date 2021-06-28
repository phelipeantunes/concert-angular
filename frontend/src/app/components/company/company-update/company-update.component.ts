import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from './../company.service';
import { Company } from './../company.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {
  company: Company
  companyForm: FormGroup
  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.companyService.readById(id).subscribe(company => {
      this.company = company
    })
  }
  updateCompany(): void {
    this.companyService.update(this.company).subscribe(() => {
      this.companyService.showAlert("Empresa atualizada!")
      this.router.navigate(['/empresas'])
    })
  }

  back(): void {
    this.router.navigate(['/empresas'])
  }
  get name() {
    return this.companyForm.get('name');
  }

  get type() {
    return this.companyForm.get('type');
  }

  get cnpj() {
    return this.companyForm.get('cnpj');
  }

  get foundation() {
    return this.companyForm.get('foundation');
  }

  get size() {
    return this.companyForm.get('size');
  }

}
