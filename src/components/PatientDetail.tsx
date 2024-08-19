import type { Patient } from '../types/index';
import { PatientDetailItem } from './PatientDetailItem';
import { usePatientStore } from '../store';
import { toast } from 'react-toastify';

type PatientDetailProps = {
    patient: Patient
}
export const PatientDetail = ({ patient }: PatientDetailProps) => {

    const deletePatient = usePatientStore(state => state.deletePatiente);
    const getPatientById = usePatientStore(state => state.getPatientById);


    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado correctamente')
    }
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

            <PatientDetailItem label={'ID'} data={patient.id} />
            <PatientDetailItem label={'Nombre'} data={patient.name} />
            <PatientDetailItem label={'Dueño'} data={patient.caretaker} />
            <PatientDetailItem label={'Email'} data={patient.email} />
            <PatientDetailItem label={'Fecha'} data={patient.date.toString()} />
            <PatientDetailItem label={'Sintomas'} data={patient.symptoms} />

            <div className='flex flex-col gap-3 md:flex-row justify-between mt-10'>
                <button
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase'
                    onClick={() => getPatientById(patient.id)}>Editar </button>
                <button
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase'
                    onClick={() => handleClick}>Eliminar</button>
            </div>
        </div>
    )
}
