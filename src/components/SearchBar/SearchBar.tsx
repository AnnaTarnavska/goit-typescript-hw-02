import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import s from './SearchBar.module.css';

type ValuesProps = {
  query: string;
};

type SearchBarProps = {
  handleChangeQuery: (query: string) => void;
};


const SearchBar = ({ handleChangeQuery }: SearchBarProps) => {
  const initialValues: ValuesProps = {
    query: '',
  };

    const handleSubmit = (values: ValuesProps, { resetForm }: FormikHelpers<ValuesProps>) => {
    const trimmedQuery = values.query.trim();

    if (trimmedQuery === '') {
      toast.error('Put some text to search images!');
      return;
    }

    handleChangeQuery(trimmedQuery);
    resetForm();
  };
  return (
    <section className={s.header}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.searchForm}>
          <Field name='query' className={s.searchInput} />
          <button type='submit' className={s.searchBtn}>Search</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SearchBar;