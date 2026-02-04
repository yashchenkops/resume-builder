const Experience = ({ position, description }) => {
  return (
    <div className="experience">
      <h3 className="experience__position">{position}</h3>

      <ul className="experience__list">
        {description.map((item, index) => (
          <li className="experience__item" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
