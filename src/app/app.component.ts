import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(a: any) {
    document.onscroll = this.manipulateTabPosition.bind(this);  //can not use call(this) here

  }

  manipulateTabPosition(e) {
    console.log(document.documentElement.scrollTop);
    //see C:\Users\rockwang\workspace\FE\tdcweb\src\app\components\products\common\components\tabs\tabs\tabs.component.ts
  }

  onClick(e) {
  	console.log('onClick', e);
  }
  onDblClick(e) {
  	console.log('onDblClick', e);
  }
  onBlur(e) {
  	console.log('onBlur', e);
  }
  onFocus(e) {
  	console.log('onFocus', e);
  }
  onChange(e) {
  	console.log('onChange', e);
  }
  onInput(e) {
  	console.log('onInput', e);
  }
  onCopy(e) {
  	console.log('onCopy', e);
  }
  onCut(e) {
  	console.log('onCut', e);
  }
  onPaste(e) {
  	console.log('onPaste', e);
  }
  onKeydown(e) {
  	console.log('onKeydown', e);
  }
  onKeyup(e) {
  	console.log('onKeyup', e);
  }
  onKeypress(e) {
  	console.log('onKeypress', e);
  }
  onMousedown(e) {
  	console.log('onMousedown', e);
  }
  onMouseup(e) {
  	console.log('onMouseup', e);
  }
  onMouseenter(e) {
  	console.log('onMouseenter', e);
  }
  onMouseleave(e) {
  	console.log('onMouseleave', e);
  }
  onMousemove(e) {
  	console.log('onMousemove', e);
  }
  onMouseover(e) {
  	console.log('onMouseover', e);
  }
}
