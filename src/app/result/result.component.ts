import { Component, OnInit } from '@angular/core';
import { ResultService } from "../state/result";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  store$: Observable<Object> = this.resultService.store$;

  constructor(private resultService: ResultService) { }

  ngOnInit() {}

}
