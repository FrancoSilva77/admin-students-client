import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:2/3 md:mx-auto">
          Administración de<span className="text-orange-600">{''} Alumnos</span>
        </h1>

        <div className="mt-12 md:flex">
          <StudentForm />

          <StudentList />
        </div>
      </div>
    </>
  );
}

export default App;
