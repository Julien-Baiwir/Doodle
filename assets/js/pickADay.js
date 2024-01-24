export function initializePikaday(inputId, selectedDatesContainerId) {
    const dateInput = document.getElementById(inputId);
    const selectedDatesContainer = document.getElementById(selectedDatesContainerId);

    if (!dateInput) {
        console.error(`Element with ID '${inputId}' not found.`);
        return;
    }

    if (!selectedDatesContainer) {
        console.error(`Element with ID '${selectedDatesContainerId}' not found.`);
        return;
    }

    const picker = new Pikaday({
        field: dateInput,
        format: 'YYYY-MM-DD',
        multiple: true,
        onSelect: function (date) {
            const selectedDates = Array.isArray(picker.getDate()) ? picker.getDate() : [picker.getDate()];

            // Update the selected dates container
            selectedDatesContainer.innerHTML = selectedDates
                .map((selectedDate) => `<div>${moment(selectedDate).format('YYYY-MM-DD')}</div>`)
                .join('');
        },
    });

    return picker;
}

