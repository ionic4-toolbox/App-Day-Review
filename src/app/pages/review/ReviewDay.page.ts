import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-ReviewDay',
    templateUrl: 'ReviewDay.page.html',
    styleUrls: ['ReviewDay.page.scss']
})
export class ReviewDayPage implements OnInit {
    private MODULE = "ReviewDayPage";

    goodthing: string;
    couldHavegoneBetter: string;
    Conclusion: string;
    professionalLearning: string;
    personalLearning: string;
    physicalCheck: string;
    emotionalCheck: string;
    grateful: string;
    creativity: string;
    date: string = new Date().toISOString().substring(0, 10);

    constructor(private storage: Storage) {
        console.log(this.MODULE + '::constructor |');

        this.storage.get(this.date).then((val) => {
            console.log(this.MODULE + '::constructor | got from storage val=', val);

            if (val !== null) {
                if (val !== undefined && val !== "") {
                    console.log(this.MODULE + '::constructor | handle data');

                    let data = JSON.parse(val);
                    this.goodthing = data.goodthing;
                    this.couldHavegoneBetter = data.couldHavegoneBetter;
                    this.Conclusion = data.Conclusion;
                    this.professionalLearning = data.professionalLearning;
                    this.personalLearning = data.personalLearning;
                    this.physicalCheck = data.physicalCheck;
                    this.emotionalCheck = data.emotionalCheck;
                    this.grateful = data.grateful;
                    this.creativity = data.creativity;
                }
            }
        });
    }

    ngOnInit() {
    }

    save() {
        let todayData = {
            "goodthing": this.goodthing,
            "couldHavegoneBetter": this.couldHavegoneBetter,
            "Conclusion": this.Conclusion,
            "professionalLearning": this.professionalLearning,
            "personalLearning": this.personalLearning,
            "physicalCheck": this.physicalCheck,
            "emotionalCheck": this.emotionalCheck,
            "grateful": this.grateful,
            "creativity": this.creativity,
        };
        this.storage.set(this.date, JSON.stringify(todayData));
        alert("Data Saved");
    }

}

