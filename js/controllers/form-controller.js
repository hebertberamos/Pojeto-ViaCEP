function Stage() {
    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.btnSave = null;
    this.btnClear = null;

    this.errorCep = null;
    this.errorNumber = null;
}

const stage = new Stage();


export function init(){
    stage.inputCep = document.forms.newAdress.cep;
    stage.inputStreet = document.forms.newAdress.street;
    stage.inputNumber = document.forms.newAdress.number;
    stage.inputCity = document.forms.newAdress.city;

    stage.btnSave = document.forms.newAdress.btnSave;
    stage.btnClear = document.forms.newAdress.btnClear;

    stage.errorCep = document.querySelector('[data-error="cep"]');
    stage.errorNumber = document.querySelector('[data-error="number"]');

    console.log(stage);
}