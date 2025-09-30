import Exit from "../public/remove-white.svg";
import { Form } from "./Form";

export class ProjectEditForm extends Form {

    constructor (projectID) {

        const formClassPrefix = 'project-edit-form';
        super(formClassPrefix);
        this.formElement.dataset.id = projectID;

    }

}