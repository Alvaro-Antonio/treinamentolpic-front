import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fullName: string = 'Fulando de tal';

  isMenuOpen = true;

  image: String | undefined;

  selected: string | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.setCurrentActiveOption();
    this.subscribeOnChangeRoutes();


  }

  subscribeOnChangeRoutes() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentActiveOption();
      }
    });
  }

  setCurrentActiveOption() {
    const urlSplited = this.router.url.toUpperCase().split('/');
    if (urlSplited != undefined && urlSplited.length >= 3) {
      this.selected = urlSplited[2];
    }
  }

  hasImage() {
    return this.image !== undefined && this.image != null;
  }

  isRoot(): boolean {
    //to do
    return true;
  }
  logout() {
    //this.authService.logout();
  }
  onClickProfile() {
    // var id: String = this.storage.getLocalUser().id.toString();
    // this.router.navigate([`user/${id}/detail`], {
    //   relativeTo: this.activatedRoute,
    // });
  }
  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  redirectSimulated() {
    this.router.navigate([`simulated`], {
      relativeTo: this.activatedRoute,
    });
  }
  redirectHome() {
    this.router.navigate([`user`], {
      relativeTo: this.activatedRoute,
    });
  }


}
