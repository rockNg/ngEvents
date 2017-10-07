import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
