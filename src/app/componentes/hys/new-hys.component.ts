import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent {
nombre: string;
porcentaje: number;

constructor(private skillS: SkillService, private router: Router) { }

ngOnInit(): void {
}

onCreate(): void{
  const skill = new Skill(this.nombre, this.porcentaje);
  this.skillS.save(skill).subscribe(
    data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    }
  )
}

}
