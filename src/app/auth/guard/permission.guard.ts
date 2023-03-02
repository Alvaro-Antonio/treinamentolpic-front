
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserType } from 'src/app/user/usertype.enum';
import { StorageService } from '../session/storage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate{

  constructor(
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router){}

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) : boolean {
      if(!this.havePermission(this.storageService.getLocalUser().type, activatedRoute.data.roles)) {
        this.toastr.error('Você não tem acesso a isso.', 'Permissão', {
          closeButton: true,
          progressBar: true
        });
        this.router.navigate(["myfastsurvey/dashboard"]);
        return false;
      }
      return true;
    }

    havePermission(profile: UserType, profiles: UserType[]): boolean{
      for(var p of profiles){
        if(p  == profile){
          return true;
        }
      }
      return false;
    }

}
