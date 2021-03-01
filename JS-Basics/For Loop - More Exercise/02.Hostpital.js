function patientCount(input) {

    let dayCount = Number(input[0]);
    let helpedPatients = 0;
    let dontHelpedPatients = 0;
    let doctorCount = 7;

    for (let i = 1; i <= dayCount; i++) {
        let patientsForDay = Number(input[i]);

        if (i % 3 == 0) {
            if (dontHelpedPatients > helpedPatients) {
                doctorCount++;
            }
        }

        if (patientsForDay <= doctorCount ) {
            helpedPatients += patientsForDay;
        } else {
            dontHelpedPatients += patientsForDay - doctorCount;
            helpedPatients += patientsForDay - (patientsForDay - doctorCount);
        }




    }
    console.log(`Treated patients: ${helpedPatients}.`);
    console.log(`Untreated patients: ${dontHelpedPatients}.`);
}
patientCount(["6",
    "25",
    "25",
    "25",
    "25",
    "25",
    "2"]);
