import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { TareapopupComponent } from '../tareapopup/tareapopup.component';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})




export class TareasComponent implements OnInit {
  calendarOptions: CalendarOptions = {};
  ListOptions: CalendarOptions = {};
  tareas:any;
  events:any[]=[]
  info: any

  constructor(private service:AuthService, private dialog:MatDialog) {
    console.log(this.service.GetUsername())

    this.getTareas()
    

    console.log(this.events)

    this.calendarOptions = {
      aspectRatio: 1.2,
     
      plugins: [dayGridPlugin, interactionPlugin,listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'today',
      },
      buttonText: {
        today: 'Hoy'
      },
     
    };
   
    this.ListOptions = {
      aspectRatio: 1.2,
      plugins: [dayGridPlugin, interactionPlugin, listPlugin],
      initialView: 'listMonth',
      headerToolbar: {
        left: 'prev,next,today',
        center: 'title',
        right: 'listDay,listWeek,listMonth',
      },
      buttonText: {
        listDay: 'Día',
        listWeek: 'Semana',
        listMonth: 'Mes',
        today: 'Hoy'
      },
      views: {
        listMonth: {
          allDayText: '', // Elimina la etiqueta "All Day" en la vista de lista del mes
        },
        listWeek: {
          allDayText: '', // Elimina la etiqueta "All Day" en la vista de lista del mes
        },
        listDay: {
          allDayText: '', // Elimina la etiqueta "All Day" en la vista de lista del mes
        }
      },
      
      eventContent: (info) => {
        let html = document.createElement("div");
        let title = document.createElement("div");
        title.innerText = info.event.title;
        let button = document.createElement("Button");
        button.className = "my-custom-button";
        button.classList.add("my-custom-button");
        button.innerText = "Mostrar";
        button.style.backgroundColor = " #6FF681"; 
        button.style.color = "black"; 
        button.style.float = "right"; 
        button.style.borderRadius = "5px"; 
        button.addEventListener('click', () => this.openTarea(info.event.extendedProps['id']));
        html.appendChild(title);
        html.appendChild(button);
        return { domNodes: [html] };
      },
     
    }
  }


           
            

  ngOnInit(): void {
  }

  getTareas(){
    this.service.getUser(sessionStorage.getItem('username')).subscribe((data:any)=>{
    this.tareas = data.tareas
    for (let i = 0; i < this.tareas.length; i++) {
      let tarea = this.tareas[i]; 
      let evento = {
        title: tarea.titulo,
        date: tarea.entrega,
        extendedProps: { status: tarea.completado, description: tarea.description, id: tarea.id } 
               
      };
      this.events.push(evento);
      console.log(evento)
    }
    this.calendarOptions.events = this.events;
    this.ListOptions.events=this.events;
    })
  }
  
  openTarea(id:any){
    this.dialog.open(TareapopupComponent,{
      data:{ID:id}
    })
  }

}