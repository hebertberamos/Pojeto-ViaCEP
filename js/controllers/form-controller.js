import Address from '../address/address.js';

function Stage() {

    this.Address = new Address();

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

    stage.inputNumber.addEventListener('change', handleInputNumberChange);
    stage.btnClear.addEventListener('click', handleBtnClearClirck);
}

function handleBtnClearClirck(event){
    event.preventDefault();
    clearForm();
    setFormError("cep", "");
    setFormError("number", "");

    removeClassInput("#cep", "uninformed");
    removeClassInput("#number", "uninformed");

    stage.inputCep.focus();
}

function clearForm(){
    stage.inputCep.value = "";
    stage.inputStreet.value = "";
    stage.inputNumber.value = "";
    stage.inputCity.value= "";
}

function handleInputNumberChange(event){
    if(event.target.value == ""){
        setFormError("number", "Campo obrigatório");
        changeClassInput("#number", "uninformed")
    }
    else{
        setFormError("number", "");
        removeClassInput("#number", "uninformed");
    }
}

function setFormError(key, value){
    const element = document.querySelector(`[data-error=${key}]`);
    element.innerHTML = value;
}

function changeClassInput(key, valueClass){
    const element = document.querySelector(`${key}`);
    element.classList.add(valueClass);
}

function removeClassInput(key, valueClass){
    const element = document.querySelector(`${key}`);
    element.classList.remove(valueClass);
}