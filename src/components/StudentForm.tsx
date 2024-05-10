import { useForm } from 'react-hook-form';
import Error from './ui/Error';
import { DraftStudent } from '../types';

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftStudent>();

  const registerStudent = (data: DraftStudent) => {
    console.log(data);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Alumnos</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade a tus Alumnos y {''}
        <span className="text-orange-600 font-bold">Administralos</span>
      </p>

      <form
        noValidate
        onSubmit={handleSubmit(registerStudent)}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="text-sm uppercase font-bold"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre del Alumno"
            className="w-full p-3  border border-gray-100 accent-orange-600"
            {...register('name', {
              required: 'El nombre es obligatorio',
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="lastname"
            className="text-sm uppercase font-bold"
          >
            Apellido
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Apellido del Alumno"
            className="w-full p-3  border border-gray-100 accent-orange-600"
            {...register('lastname', {
              required: 'El Apellido es obligatorio',
            })}
          />
          {errors.lastname && <Error>{errors.lastname?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="age"
            className="text-sm uppercase font-bold"
          >
            Edad
          </label>
          <input
            id="age"
            type="number"
            placeholder="Edad del Alumno"
            className="w-full p-3  border border-gray-100 accent-orange-600"
            {...register('age', {
              required: 'La edad es requerida',
            })}
          />
          {errors.age && <Error>{errors.age?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-sm uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del Alumno"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido',
              },
            })}
            className="w-full p-3  border border-gray-100 accent-orange-600"
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="average"
            className="text-sm uppercase font-bold"
          >
            Promedio del alumno
          </label>
          <input
            id="average"
            type="number"
            {...register('average', {
              required: 'El promedio es obligatorio',
            })}
            className="w-full p-3  border border-gray-100 accent-orange-600"
          />
          {errors.average && <Error>{errors.average?.message}</Error>}
        </div>

        {/* <div className="mb-5">
          <label
            htmlFor="image"
            className="text-sm uppercase font-bold"
          >
            Foto del alumno
          </label>
          <input
            id="image"
            name='image'
            type="file"
            {...(register('image'),
            {
              required: 'La foto es obligatoria',
            })}
            className="w-full p-3  border border-gray-100 accent-orange-600"
          />
          {errors.image && <Error>{errors.image?.message}</Error>}
        </div> */}

        <input
          type="submit"
          className="bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-orange-700 cursor-pointer transition-colors"
          value="Agregar Alumno"
        />
      </form>
    </div>
  );
}
