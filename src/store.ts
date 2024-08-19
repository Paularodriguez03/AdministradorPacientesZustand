import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { create } from 'zustand';
import type { Patient, DraftPatient } from './types/index';
import { v4 as uuidv4 } from 'uuid';

type PatientState = {
    patients: Patient[],
    addPatient: (patient: DraftPatient) => void,
    deletePatiente: (id: string) => void,
    activePatient: Patient['id'],
    getPatientById: (id: Patient['id']) => void,
    updatePatient: (patient: DraftPatient) => void
}

const createPatient = (data: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...data
    }
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({
            patients: [],
            addPatient: (patient) => {

                const NewPatient = createPatient(patient);

                set((state) => ({
                    patients: [...state.patients, NewPatient]
                }))
            },
            deletePatiente: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },
            activePatient: '',
            getPatientById: (id) => {
                set(() => ({
                    activePatient: id
                }))
            },
            updatePatient: (patient) => {
                set((state) => ({
                    patients: state.patients.map(p => p.id === state.activePatient ? { id: state.activePatient, ...patient } : p),
                    activePatient: ''
                }))
            }
        }), {
            name: 'patient-storage',
            storage: createJSONStorage(() => localStorage)
        })
        ))