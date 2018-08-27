import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public bookmarkName: string = '',
    public bookmarkURL: string = '',
      
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;

  /* */

  /* */
  
  constructor() {
    // Add default registration data.
    this.registrations.push(new Registration('Blink List', 'https://www.blinkist.com'));
    this.registrations.push(new Registration('Blogmarks', 'http://blogmarks.net'));
    this.registrations.push(new Registration('Buddymarks', 'http://buddymarks.com.websiteoutlook.com'));
    this.registrations.push(new Registration('Cite Ulike', 'http://www.citeulike.org'));
    this.registrations.push(new Registration('del.icio.us', 'https://del.icio.us'));
    this.registrations.push(new Registration('Diigo', 'https://www.diigo.com'));
    this.registrations.push(new Registration('DZone', 'https://dzone.com'));
    this.registrations.push(new Registration('reddit', 'https://www.reddit.com'));
    this.registrations.push(new Registration('The O2', 'https://www.theo2.co.uk'));
    this.registrations.push(new Registration('Furl', 'https://www.furl.co.uk'));
    this.registrations.push(new Registration('Wink', 'https://www.wink.com'));
    this.registrations.push(new Registration('Google', 'https://www.google.co.uk'));
    this.registrations.push(new Registration('London stadium', 'www.queenelizabetholympicpark.co.uk'));
    this.registrations.push(new Registration('ITV', 'https://www.itv.com'));
    this.registrations.push(new Registration('Guggenheim', 'https://www.guggenheim.or'));
    this.registrations.push(new Registration('Pablo picasso', 'https://www.pablopicasso.org'));
    this.registrations.push(new Registration('Smash magazine', 'https://www.smashingmagazine.com'));
    this.registrations.push(new Registration('Mashable', 'https://mashable.com'));
    this.registrations.push(new Registration('Magnolia', 'https://magnolia.com'));
    this.registrations.push(new Registration('Maple.nu', 'http://maple.nu/'));
    this.registrations.push(new Registration('A Wong', 'http://awong.co.uk/'));
    this.registrations.push(new Registration('My Yahoo', 'https://my.yahoo.com'));
    this.registrations.push(new Registration('University of Oxford', 'www.ox.ac.uk'));
    this.registrations.push(new Registration('BBC', 'https://www.bbc.co.uk/'));
    this.registrations.push(new Registration('Netvouz ', 'www.netvouz.com'));
    this.registrations.push(new Registration('Newsvine', 'www.newsvine.com'));
    this.registrations.push(new Registration('Facebook', 'https://en-gb.facebook.com'));
    this.registrations.push(new Registration('Onlywire', 'https://www.onlywire.com'));
    this.registrations.push(new Registration('Instagram', 'https://www.instagram.com'));
    this.registrations.push(new Registration('RawSugar', 'https://rawsugarliving.com'));
    this.registrations.push(new Registration('RecommendedIt', 'https://www.recommendit.com'));
    this.registrations.push(new Registration('Segnalo', 'www.segnalo.it'));
    this.registrations.push(new Registration('Wikipedia', 'https://en.wikipedia.org'));
    this.registrations.push(new Registration('Simpy', 'https://pypi.org/project/simpy/'));
    this.registrations.push(new Registration('Sphinn', 'http://sphinn.com/hot'));
    this.registrations.push(new Registration('Spurl', 'https://spurleditions.com/'));
    this.registrations.push(new Registration('HubPages', 'http://hubpages.com/'));
    this.registrations.push(new Registration('Stumble Upon', 'www.stumbleupon.com/'));
    this.registrations.push(new Registration('Taggly', 'http://www.taggly.com/'));
    this.registrations.push(new Registration('tagtooga', 'https://heytattoo.co.uk/'));
    this.registrations.push(new Registration('Talk Digger', 'http://www.talkdigger.com/'));
    this.registrations.push(new Registration('Psych Centrals', 'https://psychcentral.com/'));

  }

  ngOnInit() {

  }

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      // this.registrations.push(this.regModel);
    let checkFlag: boolean = false;
    
    for(let r of this.registrations) {
      if(r.bookmarkName.toLowerCase() == this.regModel.bookmarkName.toLowerCase()){
        checkFlag = true;
        break;
      }
    }
    if(checkFlag) {
      alert("Item excist!!!");
    }
    else{
    this.registrations.unshift(this.regModel);
      alert("Item saved successfully!!!");
    this.showNew = false;
    }
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].bookmarkName = this.regModel.bookmarkName;
      this.registrations[this.selectedRow].bookmarkURL = this.regModel.bookmarkURL;
      this.showNew = false;
    }
    // Hide registration entry section.
    // this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  

}
