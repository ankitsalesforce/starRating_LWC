import { LightningElement,api } from 'lwc';
import { updateRecord  } from 'lightning/uiRecordApi';
import ID_FIELD from "@salesforce/schema/Account.Id";
import FEEDBACK_FIELD from "@salesforce/schema/Account.Customer_FeedBack__c";

export default class StartRating extends LightningElement {
//   pizzarating;
  deliveryrating;
  oneRating = false;
  twoRating = false;
  threeRating = false;
  fourRating= false;
  fiveRating = false;
  submittedResponse = false;

  @api
  recordId;

//   burgerrating;
//   packagerating;

  rating(event) {
    // if (event.target.name === "Pizza") {
    //   this.pizzarating = event.target.value;
    // }
    // if (event.target.name === "Burger") {
    //   this.burgerrating = event.target.value;
    // }
    // if (event.target.name === "Package") {
    //   this.packagerating = event.target.value;
    // }
    if (event.target.name === "Delivery") {
      this.deliveryrating = event.target.value;
      
    }
 
  }

  getvalues() {
      if(this.deliveryrating === '1'){
          this.oneRating = true
      }
      if(this.deliveryrating === '2'){
        this.twoRating = true
    }
    if(this.deliveryrating === '3'){
        this.threeRating = true
    }
    if(this.deliveryrating === '4'){
        this.fourRating = true
    }
    if(this.deliveryrating === '5'){
        this.fiveRating = true
    }

    this.submittedResponse = true;


    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[FEEDBACK_FIELD.fieldApiName] = this.deliveryrating;


    const recordInput = {
        fields: fields
      };
  
          //6. Invoke the method updateRecord()
      updateRecord(recordInput).then((record) => {
        console.log(record);
      });


  }



}