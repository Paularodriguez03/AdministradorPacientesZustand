export type Patient = {
    id: string;
    name: string;
    caretaker: string;
    email: string;
    date: String;
    symptoms: string;
}

export type DraftPatient = Omit<Patient, 'id'>