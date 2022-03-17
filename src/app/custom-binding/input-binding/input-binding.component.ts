import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  /** 
   * @Input() - is a helper to initiate the chileElement outsite the its file.
   * @Input('srvElement') - the arguement inside the @input() is can be an alias to use outside and childElement can use inside.
   * 
   * Notes: when @Input() has an alias the childElement variable name can't be use outside the file.
   *   */
  @Input('srvElement') childElement: {type: string, name: string, content: string};

  constructor() { }
  ngOnInit(): void { }

}
