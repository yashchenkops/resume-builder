const SectionItem = ({ date, title, location, children }) => {
  return (
    <div className="section-item">
      <div className="section-item__left">{date}</div>

      <div className="section-item__body">
        <header className="section-item__header">
          <h3 className="section-item__company">{title}</h3>
          <p className="section-item__location">{location}</p>
        </header>

        {children}
      </div>
    </div>
  );
};

export default SectionItem;
