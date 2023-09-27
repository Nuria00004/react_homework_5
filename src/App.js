import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    key1: "Barbara",
    key2: "Hepworth",
    key3: "bhepworth@react.com",
    key4: "love cats",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //spread
      [name]: value,
    });
  };

  const formStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "400px",
    margin: "50px auto",
  };

  return (
    <div>
      <form className="form" style={formStyle}>
        <div className="form-group">
          <label htmlFor="key1">Key 1:</label>
          <input
            type="text"
            id="key1"
            name="key1"
            value={formData.key1}
            onChange={handleChange}
          />
          <div className="data">{formData.key1}</div>
        </div>

        <div className="form-group">
          <label htmlFor="key2">Key 2:</label>
          <input
            type="text"
            id="key2"
            name="key2"
            value={formData.key2}
            onChange={handleChange}
          />
          <div className="data">{formData.key2}</div>
        </div>

        <div className="form-group">
          <label htmlFor="key3">Key 3:</label>
          <input
            type="text"
            id="key3"
            name="key3"
            value={formData.key3}
            onChange={handleChange}
          />
          <div className="data">{formData.key3}</div>
        </div>

        <div className="form-group">
          <label htmlFor="key4">Key 4:</label>
          <input
            type="text"
            id="key4"
            name="key4"
            value={formData.key4}
            onChange={handleChange}
          />
          <div className="data">{formData.key4}</div>
        </div>
      </form>
    </div>
  );
}

export default App;
