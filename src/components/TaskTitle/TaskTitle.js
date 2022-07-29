import css from './TaskTitle.module.css';
import PropTypes from 'prop-types';

const TaskTitle = ({ tasktitle }) => {
  return (
      <h2 className={css.tasktitle}>{tasktitle}</h2>
  );
};

TaskTitle.propTypes = {
  tasktitle: PropTypes.string.isRequired,
};


export default TaskTitle;