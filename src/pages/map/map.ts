import { PlaygamePage } from './../playgame/playgame';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ToastController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  stagepic;//picture in map
  stage;//stage from storage
  stagepage;//stage for playgamepage
  recent_main_stage = 1;//stage for playgamepage
  latest_sub_stage;
  totalscore;
  data;//vocab for question
  loading;//don't use
  readymap = false;//for load picture
  stageTable;//table in storage

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {  

    this.totalscore = navParams.get('totalscore');
    this.data = navParams.get('data');
   
  }

  ionViewWillEnter(){ 
    let UserID;
    this.storage.get('id').then((id)=> {
      UserID = id;
    });

    this.storage.get('stageTable').then((stageTable)=> {
      this.stageTable = stageTable;
      console.log(this.stageTable);
      
       for(let i = 0; i < stageTable.length;i++){
        if(stageTable[i].id == UserID){
          this.stage = this.stageTable[i].stage;
        }
      }
        
      console.log(this.stage);

      this.setMap();
      this.readymap = true;//load success

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  presentLoadingCustom() {//don'tuse
  this.loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: `
       <img src="assets/imgs/loading/lg.palette-rotating-ring-loader.gif">     
     `
  });
  // loading.onDidDismiss(() => {
  //   console.log('Dismissed loading');
  // });

  this.loading.present();
}

  setMap(){//check laststage and picture
     if(this.stage == "1-0"){  
      this.maponezero();
      this.recent_main_stage = 1;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "1-1"){
      this.maponeone();
      this.recent_main_stage = 1;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "1-2"){
      this.maponetwo();
      this.recent_main_stage = 1;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "1-3"){
      this.maponethree();
      this.recent_main_stage = 2;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "2-1"){
      this.maptwoone();
      this.recent_main_stage = 2;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "2-2"){
      this.maptwotwo();
      this.recent_main_stage = 2;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "2-3"){
      this.maptwothree();
      this.recent_main_stage = 3;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "3-1"){
      this.mapthreeone();
      this.recent_main_stage = 3;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "3-2"){
      this.mapthreetwo();
      this.recent_main_stage = 3;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "3-3"){
      this.mapthreethree();
      this.recent_main_stage = 4;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "4-1"){
      this.mapfourone();
      this.recent_main_stage = 4;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "4-2"){
      this.mapfourtwo();
      this.recent_main_stage = 4;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "4-3"){
      this.mapfourthree();
      this.recent_main_stage = 5;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "5-1"){
      this.mapfiveone();
      this.recent_main_stage = 5;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "5-2"){
      this.mapfivetwo();
      this.recent_main_stage = 5;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "5-3"){
      this.mapfivethree();
      this.recent_main_stage = 6;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "6-1"){
      this.mapsixone();
      this.recent_main_stage = 6;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "6-2"){
      this.mapsixtwo();
      this.recent_main_stage = 6;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "6-3"){
      this.mapsixthree();
      this.recent_main_stage = 7;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "7-1"){
      this.mapsevenone();
      this.recent_main_stage = 7;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "7-2"){
      this.mapseventwo();
      this.recent_main_stage = 7;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "7-3"){
      this.mapseventhree();
      this.recent_main_stage = 8;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }else if(this.stage == "8-1"){
      this.mapeightone();
      this.recent_main_stage = 8;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 2;
      
    }else if(this.stage == "8-2"){
      this.mapeighttwo();
      this.recent_main_stage = 8;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 3;
      
    }else if(this.stage == "8-3"){
      this.mapeightthree();
      this.recent_main_stage = 8;
      
        this.stagepage = this.recent_main_stage;
        this.latest_sub_stage = 1;
      
    }
  }

  openQues(index){//play game
    if(index < this.recent_main_stage){//stage clear?
      //check latest_sub_stage
      if(index+1 == this.recent_main_stage){
        this.navCtrl.setRoot('PlaygamePage',{
          state: this.stagepage,
          data: this.data,
          substate: this.latest_sub_stage,
          lastStage: this.recent_main_stage,
          totalscore: this.totalscore
        });
      }else {
        this.navCtrl.setRoot('PlaygamePage',{
          substate: 1,
          state: index+1,
          lastStage: this.recent_main_stage,
          totalscore: this.totalscore
        });
      }
    }else {
      this.presentToast();
    }
  }

   presentToast() {//for check stageclear
    let toast = this.toastCtrl.create({
      message: 'Stage locked, Clear lower stages first',
      duration: 1000,
      position: 'middle',
      cssClass: 'toaststate'
    });
    toast.onDidDismiss(() => {
        console.log('Dismissed toast');
    });
    toast.present();
  }

  openMenu(){
    this.navCtrl.push('MenuPage');
  }

  //set picture map
  maponezero(){
     this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-0.jpg",
    "assets/imgs/map/1-2-2-0-0.jpg",
    "assets/imgs/map/1-2-3-0-0.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  maponeone(){
     this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-1.jpg",
    "assets/imgs/map/1-2-2-0-0.jpg",
    "assets/imgs/map/1-2-3-0-0.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  maponetwo(){
     this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-2.jpg",
    "assets/imgs/map/1-2-2-0-0.jpg",
    "assets/imgs/map/1-2-3-0-0.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  maponethree(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-0.jpg",
    "assets/imgs/map/1-2-3-0-0.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  maptwoone(){
     this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-1.jpg",
    "assets/imgs/map/1-2-3-0-0.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  maptwotwo(){
     this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-2.jpg",
    "assets/imgs/map/1-2-3-0-0.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  maptwothree(){
     this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-0new.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapthreeone(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-1.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapthreetwo(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-2.jpg",
    "assets/imgs/map/1-3-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapthreethree(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-0-0.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapfourone(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-1.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapfourtwo(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-2.jpg",
    "assets/imgs/map/1-4-0.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapfourthree(){
      this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-3.jpg",
    "assets/imgs/map/1-4-0-1.jpg",
    "assets/imgs/map/1-5-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapfiveone(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-1.jpg",
    "assets/imgs/map/1-4-1.jpg",
    "assets/imgs/map/1-5-0-0.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapfivetwo(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-2.jpg",
    "assets/imgs/map/1-4-2.jpg",
    "assets/imgs/map/1-5-0-1.jpg",
    "assets/imgs/map/1-5-2-0.jpg"

  ]
  }

  mapfivethree(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-0-2.jpg",
    "assets/imgs/map/1-5-2-0-0.jpg"

  ]
  }

  mapsixone(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-1.jpg",
    "assets/imgs/map/1-5-2-0-0.jpg"

  ]
  }

  mapsixtwo(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-2.jpg",
    "assets/imgs/map/1-5-2-0-0.jpg"

  ]
  }

  mapsixthree(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3.jpg",
    "assets/imgs/map/1-5-2-0-1.jpg"

  ]
  }

  mapsevenone(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3-0.jpg",
    "assets/imgs/map/1-5-2-7-1.jpg"

  ]
  }

  mapseventwo(){
    this.stagepic = [
    "assets/imgs/map/1up-0-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3-0.jpg",
    "assets/imgs/map/1-5-2-7-2.jpg"

  ]
  }

  mapseventhree(){
    this.stagepic = [
    "assets/imgs/map/1-8-0.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3-0.jpg",
    "assets/imgs/map/1-5-2-7-3.jpg"

  ]
  }

  mapeightone(){
    this.stagepic = [
    "assets/imgs/map/1-8-1.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3-0.jpg",
    "assets/imgs/map/1-5-2-7-3.jpg"

  ]
  }

  mapeighttwo(){
    this.stagepic = [
    "assets/imgs/map/1-8-3.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3-0.jpg",
    "assets/imgs/map/1-5-2-7-3.jpg"

  ]
  }

  mapeightthree(){
    this.stagepic = [
    "assets/imgs/map/1-8-4.jpg",
    "assets/imgs/map/1-1-3.jpg",
    "assets/imgs/map/1-2-2-3.jpg",
    "assets/imgs/map/1-2-3-3.jpg",
    "assets/imgs/map/1-3-4-3.jpg",
    "assets/imgs/map/1-4-3.jpg",
    "assets/imgs/map/1-5-1-6-3-0.jpg",
    "assets/imgs/map/1-5-2-7-3.jpg"

  ]
  }
}
