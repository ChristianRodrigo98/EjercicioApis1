import { Component, inject } from '@angular/core';
import { MonsterHunterService } from '../../services/monster-hunter.service';
import { MonsterHunterInterface} from '../../common/monster-hunter-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monster-hunter-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './monster-hunter-list.component.html',
  styleUrl: './monster-hunter-list.component.css'
})
export class MonsterHunterListComponent {
  private monsterHunterService: MonsterHunterService = inject(MonsterHunterService)
  apiData: MonsterHunterInterface[] = [];

  constructor() {
      this.loadApi()
  }

  private loadApi(){
    this.monsterHunterService.getCharacters().subscribe(
      {
        next: value => {
          this.apiData = value;
          return this.apiData;
        },
        error: err => {
          console.log(err.message);
        },
        complete: () => {
          console.log("Api cargada con exito.");
          
        }
      }
    )
  }

  arrayRareza(rareza: number){
    return Array(rareza)
  }

}
