import { Router } from '@angular/router';
import { CompanyService } from './../company.service';
import { Company } from './../company.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  companyForm: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.createCompanyForm();
  }
  company: Company = {
    name: "",
    type: "",
    cnpj: "",
    foundation: "",
    size: ""
  }

  createCompanyForm() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      type: ['', Validators.compose([Validators.required])],
      cnpj: ['', Validators.compose([Validators.required])],
      foundation: ['', Validators.compose([Validators.required])],
      size: ['', Validators.compose([Validators.required])],
    });
  }
  registerCompany(): void {
    this.companyService.register(this.company).subscribe(() => {
      this.companyService.showAlert('Pessoa registrata!')
      this.router.navigate(['/empresas'])
    })
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
  back(): void {
    this.router.navigate(['/empresas'])
  }
}
