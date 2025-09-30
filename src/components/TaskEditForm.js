import Exit from "../public/remove-white.svg";
import { Form } from "./Form";

export class TaskEditForm extends Form {

    constructor (taskID) {

        const formClassPrefix = 'task-edit-form';
        super(formClassPrefix);
        this.formElement.dataset.id = taskID;

    }

}