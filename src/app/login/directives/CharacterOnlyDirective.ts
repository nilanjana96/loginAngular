import { Directive, HostListener } from '@angular/core';


@Directive({
    selector: '[appAlphabetOnly]'
})


export class CharacterOnlyDirective {
    private _key: number | undefined;
    public get key(): number | undefined {
        return this._key;
    }
    public set key(value: number | undefined) {
        this._key = value;
    }
    @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent): void {
        this.key = event.keyCode;
        console.log(this.key);
        if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
            event.preventDefault();
        }
    }
}
