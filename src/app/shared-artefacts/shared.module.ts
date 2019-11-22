import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameTransformPipe } from './name-formatter.pipe';
import { ArraySorterPipe } from './array-sorter.pipe';

@NgModule({
    declarations : [NameTransformPipe,ArraySorterPipe],
    imports: [CommonModule],
    exports:[NameTransformPipe,ArraySorterPipe]
})

export class ShareModule{}