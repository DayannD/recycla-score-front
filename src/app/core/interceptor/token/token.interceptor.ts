import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from "rxjs";
import { Inject } from "@angular/core";

//TODO: faire avec une class plutot qu'une fonction
// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   const authService = Inject('authService');
//   const router = Inject('router');
//
//   return next(req).pipe(
//     catchError((err) => {
//       if (err.status === 403) {
//         console.log('403');
//         authService.logout();
//         router.navigate(['/login']);
//       }
//       return throwError(() => err);
//   }));
// };

