import Exit from "../public/remove.svg";


export class ProjectForm {

    constructor() {

        this.formElement = this.constructElement();
        this.displayForm();

    }

    constructElement() {

        const formElement = document.createElement('div');
        formElement.classList.add('project-form')
        const formExit = document.createElement('img');
        formExit.classList.add('project-form__exit');
        formExit.src = Exit;
        formElement.appendChild(formExit);
        const formInputElementTitle = document.createElement('input');
        formInputElementTitle.classList.add('project-form__input-title');
        formInputElementTitle.placeholder = 'Project title';
        formElement.appendChild(formInputElementTitle);
        const formInputElementDescription = document.createElement('input');
        formInputElementDescription.classList.add('project-form__input-description');
        formInputElementDescription.placeholder = 'Project Description';
        formElement.appendChild(formInputElementDescription);
        const formSubmit = document.createElement('button');
        formSubmit.classList.add('project-form__button-submit');
        formSubmit.textContent = 'Submit';
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
        }

    }

}