import {Component} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {ICat} from "../../models/cat.model";
import {Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  cats: ICat[] = [];

  catsForm = this.fb.group({
    limit: [0, [Validators.min(0)]]
  });

  constructor(private catsService: CatsService, private fb: FormBuilder) {
  }

  getCats() {
    this.catsService
      .get(this.catsForm.get("limit")?.value ?? 0)
      .subscribe((data: ICat[]) => {
        this.cats = data;
      });
  }
}
