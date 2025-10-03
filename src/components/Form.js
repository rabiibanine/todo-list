import Close from "../public/remove.svg";

export class Form {
    constructor(formClassPrefix) {
        this.formClassPrefix = formClassPrefix;
        this.formElement = this.constructElement();
        this.displayForm();
    }

    constructElement() {
        const formElement = document.createElement("div");
        formElement.classList.add(`${this.formClassPrefix}`, "form");

        const formExit = document.createElement("img");
        formExit.classList.add(`${this.formClassPrefix}__close`);
        formExit.src = Close;
        formElement.appendChild(formExit);

        const formInputElementTitle = document.createElement("input");
        formInputElementTitle.classList.add(`${this.formClassPrefix}__input-title`);
        formInputElementTitle.placeholder = "Title";
        formElement.appendChild(formInputElementTitle);

        const formInputElementDescription = document.createElement("input");
        formInputElementDescription.classList.add(`${this.formClassPrefix}__input-description`);
        formInputElementDescription.placeholder = "Description";
        formElement.appendChild(formInputElementDescription);

        const fields = this.getFields();
        fields.forEach(field => formElement.appendChild(field));
        

        const formSubmit = document.createElement("button");
        formSubmit.classList.add(`${this.formClassPrefix}__button-submit`);
        formSubmit.textContent = "Submit";
        formElement.appendChild(formSubmit);

        this.formInputElementTitle = formInputElementTitle;
        this.formInputElementDescription = formInputElementDescription;
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
            title: this.formInputElementTitle.value,
            description: this.formInputElementDescription.value,
        };
    }
}
