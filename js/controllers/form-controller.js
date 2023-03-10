import Address from '../address/address.js';
import * as addressService from '../services/address-service.js';

function State() {

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

    state.inputCep = addEventListener('change', handleInputCepChange);
    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.btnClear.addEventListener('click', handleBtnClearClick);
    state.btnSave.addEventListener('click', handleBtnSaveClick);
}

async function handleInputCepChange(event){
    // const cep = event.target.value;
    // console.log(cep);
    // try{
    //     const address = await addressService.findByCep(cep);
    //     state.inputCity.value = address.city;
    //     state.inputStreet.value = address.street;
    //     state.address = address;

    //     setFormError("cep", "");
    //     removeClassInput("#cep", "uninformed");
    //     state.inputNumber.focus();
    // }
    // catch(e){
    //     state.inputCity.value = "";
    //     state.inputStreet.value = "";
    //     if(cep == ""){
    //         setFormError('cep', "Campo obrigatório");
    //         changeClassInput('#cep', "uninformed");
    //     }
    //     else{
    //         setFormError('cep', "Informe um CEP válido");
    //         changeClassInput('#cep', "uninformed");
    //     }
    // }
}

async function handleBtnSaveClick(event){
    event.preventDefault();
    console.log(event.target);
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