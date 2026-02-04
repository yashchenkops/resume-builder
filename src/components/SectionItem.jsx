const SectionItem = ({ left, company, location, children }) => {
  return (
    <div className="section-item">
      <div className="section-item__left">{left}</div>

      <div className="section-item__body">
        {(company || location) && (
          <header className="section-item__header">
            {company && (
              <h3 className="section-item__company">{company}</h3>
            )}
            {location && (
              <span className="section-item__location">{location}</span>
            )}
          </header>
        )}

        {children}
      </div>
    </div>
  );
};

export default SectionItem;
