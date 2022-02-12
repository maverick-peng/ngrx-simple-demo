import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  // 註解下面這行看看差異
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() footerData: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called!');
  }

  ngOnInit(): void {
    console.log('onInit called!');
  }
}
