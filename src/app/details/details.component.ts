import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../app/contact.service';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact, FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {

  contactDetails: Contact = {
    name: null ,
    phone: null,
    email: null,
    picture: null
  };

  contactId = null;

  form;

  //Criando campos para edição
  contactForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
  });
  

  constructor(private route : ActivatedRoute,
     private contactService : FirebaseService,
     private navCtrl : NavController,
     private loadingController : LoadingController) {

  }
  

  ngOnInit() {

    this.contactId = this.route.snapshot.params['id'];
    if (this.contactId) {
      this.loadContact();
    }
  }

  async loadContact() {
    const loading = await this.loadingController.create({
      message: 'Loading Contact..'
    });
    await loading.present();

    this.contactService.getContact(this.contactId).subscribe(res => {
      loading.dismiss();
      this.contactDetails = res;
    })
  }

  async saveContact() {
    const loading = await this.loadingController.create({
      message: 'Saving Contact..'
    });
    await loading.present();

    //Editar Contato
    if (this.contactId) {
      this.contactService.updateContact(this.contactDetails, this.contactId).then(() => {
        loading.dismiss();
        this.navCtrl.back();
      })

    //Adicionar novo contato
    } else {
      this.contactService.addContact(this.contactDetails).then(() => {
        loading.dismiss();
        this.navCtrl.back();
      })
    }
  }

  remove() {
    this.contactService.removeContact(this.contactId);
    this.navCtrl.back();
  }

  goBack() {
    this.navCtrl.back();
  }


}
