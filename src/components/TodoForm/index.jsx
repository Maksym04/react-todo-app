import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { TODO_SCHEMA } from '../../utils/validatingSchemas';
import Header from '../Header';
import TodosList from '../TodosList';
import styles from './TodoForm.module.sass';

const tasksDB = [
  {
    id: Date.now(),
    body: 'example of filling',
    isDone: false,
  },
];

function TodoForm () {
  const [tasks, setTasks] = useState(tasksDB);

  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    formikBag.resetForm();
    setTasks([...tasks, newTask]);
  };

  const withoutTasks = {
    body: '',
    isDone: false,
  };

  return (
    <section className={styles.todoBlock}>
      <Header tasks={tasks} />
      <article className={styles.tasksBlock}>
        <Formik
          initialValues={withoutTasks}
          onSubmit={addTask}
          validationSchema={TODO_SCHEMA}
        >
          {formikProps => (
            <Form className={styles.formBlock}>
              <div className={styles.inputBlock}>
                <Field name='body'>
                  {({ field, form, meta }) => {
                    const inputClassNames = classNames(styles.inputBox, {
                      [styles.validInput]: !meta.error && meta.touched,
                      [styles.invalidInput]: meta.error && meta.touched,
                    });
                    return (
                      <input
                        {...field}
                        placeholder='Enter todo here'
                        autoFocus
                        className={inputClassNames}
                      />
                    );
                  }}
                </Field>
                <button className={styles.submitButton} type='submit'>
                  Submit
                </button>

                <ErrorMessage
                  name='body'
                  component='div'
                  className={styles.errorBox}
                />
              </div>
            </Form>
          )}
        </Formik>
        <TodosList tasks={tasks} setTasks={setTasks} />
      </article>
    </section>
  );
}

export default TodoForm;
