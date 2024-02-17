import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contributor-dashboard',
  templateUrl: './contributor-dashboard.component.html',
  styleUrls: ['./contributor-dashboard.component.scss']
})
export class ContributorDashboardComponent implements OnInit{

  constructor(private router:Router, private auth:AuthService) { }
  ngOnInit(): void {
    this.auth.getData().subscribe((value) => {
      this.isMenuOpen = value;
    })
  }


  profileicon = faCircleUser;
  isMenuOpen:boolean = true;  

  isContributorpage = this.router.url === '/contributor';

  menuBar(data: boolean) {
    this.isMenuOpen = data;

  }

  ngOnChanges(){
    
  }

}
