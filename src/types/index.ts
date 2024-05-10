export type Student = {
  id: number;
  name: string;
  lastname: string;
  age: number;
  email: string;
  average: number;
};

export type DraftStudent = Omit<Student, 'id'>;
