import Address from '../address/address.js';
import * as addressService from '../services/address-service.js';

function State() {

    this.address = new Address();

    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.btnSave = null;
    this.btnClear = null;

    this.errorCep = null;
    this.errorNumber = null;
}

const state = new State();


export function init(){
    state.inputCep = document.forms.newAdress.cep;
    state.inputStreet = document.forms.newAdress.street;
    state.inputNumber = document.forms.newAdress.number;
    state.inputCity = document.forms.newAdress.city;

    state.btnSave = document.forms.newAdress.btnSave;
    state.btnClear = document.forms.newAdress.btnClear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');
    
    state.inputCep.addEventListener('change', handleInputCepChange);
    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);
    state.btnClear.addEventListener('click', handleBtnClearClick);
    state.btnSave.addEventListener('click', handleBtnSaveClick);
}

function handleInputNumberKeyup(event){
    state.address.number = state.inputNumber.value
}

async function handleInputCepChange(event){
    const cep = event.target.value;
    try{
        const address = await addressService.findByCep(cep);
        state.inputStreet.value = address.street;
        state.inputCity.value = address.city;
        state.address = address;
        setFormError("cep", "");
        removeClassInput("#cep", "uninformed");
    }
    catch(e){
        if(event.target.value == ""){
            setFormError("cep", "Campo obrigatório");
            changeClassInput("#cep", "uninformed");
            state.inputCity.value = "";
            state.inputStreet.value = "";
        }
        else{
            setFormError("cep", "CEP inválido");
            changeClassInput("#cep", "uninformed");
            state.inputCity.value = "";
            state.inputStreet.value = "";
        }
    }
}

async function handleBtnSaveClick(event){
    event.preventDefault();
    console.log(state.address);
}

function handleBtnClearClick(event){
    event.preventDefault();
    clearForm();
    setFormError("cep", "");
    setFormError("number", "");

    removeClassInput("#cep", "uninformed");
    removeClassInput("#number", "uninformed");

    state.inputCep.focus();
}

function clearForm(){
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value= "";
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