import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, Inject} from '@angular/core';
import SimpleMDE from 'simplemde';
import {SimpleMdEOptions} from './simpleMDE.types';

@Directive({
  selector: '[SimpleMDE]'
})
export class SimpleMDEDirective implements AfterViewInit{
  private _simpleMDE?: SimpleMDE;
  private _options: SimpleMdEOptions;
  constructor(@Inject('config') private config: SimpleMdEOptions, private _element: ElementRef) {
    this._options = {
      element: this._element.nativeElement,
      ...config
    };
  }

  /*
   * Changes to SimpleMDE will be emitted to parent component
   */
  @Output('SimpleMDE') content: EventEmitter<string> = new EventEmitter();

  /*
   * Changes to textarea (or initial value) will be set to SimpleMDE - used to ensure two-way binding
   */
  _initialContent: string;
  @Input('SimpleMDE') set initialContent(value: string) {
    this._initialContent = value;
    if (this._simpleMDE) {
      if (this._initialContent !== this._simpleMDE.value()){
        this._simpleMDE.value(this._initialContent);
      }
    }
  }

  /*
   * Optional Input: Overrides default options
   */
  @Input() set options(value: any) {
    const baseOptions = this._options;
    this._options = {
      ...baseOptions,
      ...value
    };
  }

  public ngAfterViewInit(): void {
    /*
     * Instantiate a simpleMDE instance
     */
    if (!this._simpleMDE) {
      this._simpleMDE = new SimpleMDE(this._options);
      if (this._initialContent){
        this._simpleMDE.value(this._initialContent);
      }
    }

    /*
     * Listen to changes to simpleMDE instance and emit them to parent component
     */
    this._simpleMDE.codemirror.on('change', () => {
      this.content.emit(this._simpleMDE.value());
    });
  }
}
