import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { EntriesService } from '../entries.service';
import { PROFILE_QUESTIONNAIRE, Questionnaire } from '../questionnaire';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.page.html',
  styleUrls: ['./answers.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AnswersPage implements OnInit {

  constructor(
    private entries: EntriesService
  ) { }

  data: any = {};

  questionnaire: Questionnaire = PROFILE_QUESTIONNAIRE;

  ngOnInit() {
    this.data = this.entries.getLastEntry();
    console.log(this.data);
    console.log(this.data["2"]);
    
    
  }

}
