import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ContactService } from '../contact.service';
import { FirebaseService, Contact } from '../services/firebase.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  contacts: Contact[];

  constructor(public router : Router, private contactService : FirebaseService) {
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res;
     });
  }

  showDetails(contact, index) {

    contact.id = index;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(contact)
      }
    }
    
    this.router.navigate(['details'], navigationExtras)

  }

}
