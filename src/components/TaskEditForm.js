import Exit from "../public/remove-white.svg";
import { Form } from "./Form";

export class TaskEditForm extends Form {

    constructor (taskID) {

        const formClassPrefix = 'task-edit-form';
        super(formClassPrefix);
        this.formElement.dataset.id = taskID;

    }

    getFields() {

        const priorityField = document.createElement("div");
        priorityField.classList.add("priority-field");
        priorityField.classList.add("field");

        const priorityFieldLabel = document.createElement("label");
        priorityFieldLabel.textContent = "Priority:";
        priorityFieldLabel.htmlFor = "priority";
        priorityField.appendChild(priorityFieldLabel);

        const priorityFieldSelect = document.createElement("select");

        const priorityHigh = document.createElement("option");
        priorityHigh.value = "High";
        priorityHigh.textContent = "High";
        priorityFieldSelect.appendChild(priorityHigh);

        const priorityNormal = document.createElement("option");
        priorityNormal.value = "Normal";
        priorityNormal.textContent = "Normal";
        priorityFieldSelect.appendChild(priorityNormal);

        const priorityLow = document.createElement("option");
        priorityLow.value = "Low";
        priorityLow.textContent = "Low";
        priorityFieldSelect.appendChild(priorityLow);

        priorityField.appendChild(priorityFieldLabel);
        priorityField.appendChild(priorityFieldSelect);

        const dueDateField = document.createElement("div");
        dueDateField.classList.add("due-date-field");
        dueDateField.classList.add("field");

        const dueDateFieldLabel = document.createElement("label");
        dueDateFieldLabel.classList.add("due-date-field-label");
        dueDateFieldLabel.textContent = "Date:";
        dueDateField.appendChild(dueDateFieldLabel);

        const dueDateFieldInput = document.createElement("input");
        dueDateFieldInput.classList.add("due-date-field-input");
        dueDateFieldInput.type = "date";
        dueDateField.appendChild(dueDateFieldInput);


        return [
            priorityField,
            dueDateField
        ]

    }

}