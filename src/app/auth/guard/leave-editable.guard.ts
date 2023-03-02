import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EditableComponent } from './editable.component';
import { Injectable } from "@angular/core";

@Injectable()
export class LeaveEditableGuard implements CanDeactivate<EditableComponent> {

    canDeactivate(orderComponent: EditableComponent, activatedRoute: ActivatedRouteSnapshot,
                  routerState: RouterStateSnapshot): boolean {

        if(!orderComponent.isEdited){
            return window.confirm('Deseja realmente sair sem salvar as alterações?')
        } else {
            return true
        }
    }

}
