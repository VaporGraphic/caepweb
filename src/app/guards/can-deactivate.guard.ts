import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AdminPageComponent } from '../pages/admin-page/admin-page.component';


export class CanDeactivateGuard implements CanDeactivate<AdminPageComponent> {
  canDeactivate(
    component: AdminPageComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot
    ){
    return component.puedeSalir();
  }
  
}
