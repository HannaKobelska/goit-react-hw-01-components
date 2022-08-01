import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics(props) {

  const stats = props.stats;
  const view = stats.map(stat => (
    <li className={css.item} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      
      {props.title === undefined ? (
        <h2 className={css.hidden}>Section Name</h2>
      ) : (
        <h2 className={css.title}>{props.title}</h2>
      )}
      
      <ul className={css.stat__list}>{view}</ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;