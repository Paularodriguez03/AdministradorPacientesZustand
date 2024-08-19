import { usePatientStore } from '../store';
import { PatientDetail } from './PatientDetail';

export const PatientsList = () => {

  const patients = usePatientStore(state => state.patients);
  console.log(patients);

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {/* <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2> */}

      {patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'> Listado de Pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>Administra tus {''} <span className='text-indigo-600 font-bold'>Pacientes y Citas</span></p>
          {patients.map(patient => (
            <PatientDetail key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className='mt-5 text-xl mb-10 text-center'>
            Comienza agregando pacientes y {' '}
            <span className='text-indigo-600 font-bold'>  se visualizaran aqui</span>
          </p>

        </>
      )}
    </div >
  )
}
