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
        const priorityFieldLabel = document.createElement("label");
        priorityFieldLabel.htmlFor = "priority"
        const priorityFieldSelect = document.createElement("select");
        const priorityHigh = document.createElement("option");
        priorityHigh.value = "High";
        priorityHigh.textContent = "High";
        const priorityNormal = document.createElement("option");
        priorityNormal.value = "Normal";
        priorityNormal.textContent = "Normal";
        const priorityLow = document.createElement("option");
        priorityLow.value = "Low";
        priorityLow.textContent = "Low";

        priorityFieldSelect.appendChild(priorityHigh);
        priorityFieldSelect.appendChild(priorityNormal);
        priorityFieldSelect.appendChild(priorityLow);
        priorityField.appendChild(priorityFieldLabel);
        priorityField.appendChild(priorityFieldSelect);


        const dueDateField = document.createElement("input");
        dueDateField.type = "datetime-local";


        return [
            priorityField,
            dueDateField
        ]

    }

}