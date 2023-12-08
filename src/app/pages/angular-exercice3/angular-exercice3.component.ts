// import { Component, Inject, OnInit } from '@angular/core';
// import { Subject, timer } from 'rxjs';
// import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

// @Component({
//   selector: 'app-angular-exercice3',
//   templateUrl: './angular-exercice3.component.html',
//   styleUrls: ['./angular-exercice3.component.css'],
// })
// export class AngularExercice3Component implements OnInit {
//   query = '';
//   querySubject = new Subject<string>();
//   users: { email: string }[] = [];
//   private destroy$ = new Subject<void>();

//   constructor(@Inject(String) private userService: UserService) {}

//   ngOnInit(): void {
//     this.querySubject
//       .pipe(
//         debounceTime(300), // Espera 300ms después de cada pulsación de tecla antes de emitir el valor más reciente
//         switchMap((q) =>
//           timer(0, 60000).pipe(
//             // Reinicia el timer cada vez que cambia la consulta
//             switchMap(() => this.userService.findUsers(q))
//           )
//         ),
//         takeUntil(this.destroy$) // Se asegura de que se desuscriba cuando el componente se destruya
//       )
//       .subscribe({
//         next: (res) => (this.users = res),
//       });
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next(); // Emite un valor para desencadenar la desuscripción
//     this.destroy$.complete(); // Cierra el Subject
//   }
// }

// Cambios realizados:

// - Se agregó `debounceTime` para manejar la entrada del usuario y limitar las solicitudes al servidor.
// - Se cambió `concatMap` por `switchMap` para cancelar la solicitud anterior si el usuario introduce una nueva consulta antes de que se complete la solicitud actual.
// - Se agregó el manejo de la desuscripción mediante un `Subject` que se emite en `ngOnDestroy`.
// - Se corrigió el uso de `timer` para que se reinicie con cada nueva consulta.
// Recuerde que para que este código funcione correctamente, el servicio `UserService` debe tener un método `findUsers` que devuelva un `Observable`. Además, asegúrese de que todas las importaciones necesarias de RxJS y Angular estén presentes en su archivo.
