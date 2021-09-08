import React from 'react';
import { DeleteForever } from '@material-ui/icons';
import styles from './TodosList.module.sass';
import { Field, Form, Formik } from 'formik';

function TodosList ({ tasks, setTasks }) {
  const doneStatus = id => {
    const newTasks = tasks.map(statusTask => {
      if (statusTask.id === id) {
        statusTask.isDone = !statusTask.isDone;
      }
      return statusTask;
    });
    setTasks(newTasks);
  };

  const deleteTask = id => {
    const newTasks = [...tasks];
    newTasks.splice(
      newTasks.findIndex(delTask => id === delTask.id),
      1
    );
    setTasks(newTasks);
  };

  const mapTasks = task => (
    <li key={task.id} className={styles.tasksListBlock}>
      <Formik initialValues={{ activeTask: task.isDone }}>
        {formikBag => (
          <Form>
            <Field
              type='checkbox'
              name='activeTask'
              onClick={() => {
                doneStatus(task);
              }}
            />
          </Form>
        )}
      </Formik>
      <p className={styles.tasksListText}>{task.body}</p>
      <button
        className={styles.deleteButton}
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <DeleteForever className={styles.logoButton} />
      </button>
    </li>
  );

  return <ul className={styles.tasksListContainer}>{tasks.map(mapTasks)}</ul>;
}

export default TodosList;
