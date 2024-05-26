import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonButton, IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, IonToggle, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonLabel, IonInput, IonPopover, NavController, IonBackButton } from '@ionic/angular/standalone';
import { PROFILE_QUESTIONNAIRE, Questionnaire } from '../questionnaire';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonButton, IonInput, IonPopover, IonInput, IonLabel, IonDatetime, IonSelect, IonSelectOption, IonRadio, IonRadioGroup, IonToggle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuestionsPage implements OnInit {

  constructor(
    private entries: EntriesService,
    private navCtrl: NavController
  ) { }

  data: any = {};

  questionnaire: Questionnaire = PROFILE_QUESTIONNAIRE;

  ngOnInit() {
  }

  save() {
    console.log({data:this.data});
    this.entries.saveEntry(this.data);
    this.navCtrl.navigateForward("/answers");
  }

}
