const CustomLoader = (color = "text-primary") => {
  return (
    <div className="loading">
      <div className={`spinner-border ${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default CustomLoader;
