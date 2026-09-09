const formBoxes =
    document.querySelectorAll('.form-box');

const formLinks =
    document.querySelectorAll('[data-form]');

const recoveryForm =
    document.getElementById('recovery-form');

function showForm(formId) {

    const nextForm =
        document.getElementById(formId);

    if (!nextForm) {
        return;
    }

    formBoxes.forEach((form) => {
        form.classList.remove('active');
    });

    nextForm.classList.add('active');
}

formLinks.forEach((link) => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

        const formId =
            link.dataset.form;

        showForm(formId);

    });

});

recoveryForm.addEventListener(
    'submit',
    (event) => {

        event.preventDefault();

        if (!recoveryForm.checkValidity()) {

            recoveryForm.reportValidity();

            return;
        }

        showForm('change-form');

    }
);