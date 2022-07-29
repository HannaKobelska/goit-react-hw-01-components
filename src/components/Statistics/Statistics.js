import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics(props) {

  const stats = props.stats;
  const view = stats.map(stat => (
    <li key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className="">
      
        <h2 className="">Upload stats</h2>
      
      <ul className="">{view}</ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;