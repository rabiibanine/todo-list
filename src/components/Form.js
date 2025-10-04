import { capitalizeEachWord } from "../utils/capitalizeEachWord";

import Close from "../public/remove.svg";

export class Form {
    constructor(formClassPrefix) {
        this.formClassPrefix = formClassPrefix;
        this.formTitle = capitalizeEachWord(formClassPrefix.replaceAll("-", " "));
        this.formElement = this.constructElement();
        this.displayForm();
    }

    constructElement() {
        // # Form
        const formElement = document.createElement("div");
        formElement.classList.add(`${this.formClassPrefix}`, "form");

        // ## Header

        const formHeader = document.createElement("div");
        formHeader.classList.add("form-header");

        // ## Header Title

        const formTitle = document.createElement("h2");

        formTitle.textContent = this.formTitle;
        formHeader.appendChild(formTitle);

        // ## Header Exit

        const formExit = document.createElement("img");
        formExit.classList.add(`${this.formClassPrefix}__close`);
        formExit.src = Close;
        formHeader.appendChild(formExit);

        // ## Body 

        const formBody = document.createElement("div");
        formBody.classList.add("form-body");
        
        // ## Body Input Title

        const formInputElementTitle = document.createElement("input");
        formInputElementTitle.classList.add(`${this.formClassPrefix}__input-title`);
        formInputElementTitle.placeholder = "Title";
        formBody.appendChild(formInputElementTitle);

        // ## Body Input Description

        const formInputElementDescription = document.createElement("input");
        formInputElementDescription.classList.add(`${this.formClassPrefix}__input-description`);
        formInputElementDescription.placeholder = "Description";
        formBody.appendChild(formInputElementDescription);

        // ## Body Input Fields

        const fields = this.getFields();
        fields.forEach(field => formBody.appendChild(field));
        
        // ## Body Submit

        const formSubmit = document.createElement("button");
        formSubmit.classList.add(`${this.formClassPrefix}__button-submit`);
        formSubmit.textContent = "Submit";
        formBody.appendChild(formSubmit);

        this.formInputElementTitle = formInputElementTitle;
        this.formInputElementDescription = formInputElementDescription;
        formElement.appendChild(formHeader);
        formElement.appendChild(formBody);
        return formElement;
    }

    displayForm() {
        document.body.appendChild(this.formElement);
    }

    closeForm() {
        document.body.removeChild(this.formElement);
    }

    submitForm() {

        return {
            title: this.formInputElementTitle.value || "Unnamed",
            description: this.formInputElementDescription.value || "No description",
        };
    }
}
