import { MetaService } from './services/meta/meta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BarChartComponent } from './components/data-visualisation/bar-chart/bar-chart.component';
import { LineGraphComponent } from './components/data-visualisation/line-graph/line-graph.component';
import { GridComponent } from './components/grid/grid.component';
import { ModalComponent } from './components/modal/modal.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    CardComponent,
    BarChartComponent,
    LineGraphComponent,
    GridComponent,
    ModalComponent,
    SafePipe
  ],
  exports: [CardComponent, GridComponent, ModalComponent, SafePipe],
  imports: [CommonModule],
  providers: [MetaService]
})
export class SharedModule {}
