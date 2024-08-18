import React, { useEffect, useState } from 'react';
export default function Jobs() {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState([]);
  const [region, setRegion] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    handler();  
  }, []);

  const handler = () => {
    setError("");
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1owGcfKZRHZq8wR7Iw6PVh6-ueR0weIVQMjxWW_0M6a8/values/Sheet1?key=AIzaSyDErRezqW2klWRYKwQkzuOIMGJ5AeD5GSY`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data Not Found");
        }
        return response.json();
      })
      .then((data) => {
        setResult(data.values || []);
        const uniqRegions = [...new Set(data.values.slice(1).map((row) => row[7]))];
        setRegion(uniqRegions); // Set the unique regions
        setFilter(data.values); // Initially set the filter to all data
      })
      .catch((err) => setError(err.message));
  };

  const handleRegionChange = (e) => {
    const regionValue = e.target.value;
    setSelectedRegion(regionValue);

    if (regionValue === "") {
      setFilter(result); // Show all data if no region is selected
    } else {
      // Filter the result based on selected region
      const filtered = result.slice(1).filter((row) =>
        row[7].toLowerCase() === regionValue.toLowerCase()
      );
      setFilter([result[0], ...filtered]); // Add the header back to the filtered results
    }
  };

  return (
    <>
    <div className='container'>
      <h2 className="heading mt-3 pt-5 mb-3">Find a Job</h2>
      <center>
      <div className="form-group col-md-10 mb-5">
        <select
          id="regionSelect"
          className="form-control"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">All Regions</option>
          {region.map((reg, index) => (
            <option key={index} value={reg}>
              {reg}
            </option>
          ))}
        </select>
      </div>
      </center>

      {error && <p style={{ color: 'red' }}>{error}</p>}  

    <div className='table-responsive'>
      <table className="table table-dark table-striped table-hover table-bordered" style={{ width: '100%' }}>
        <thead>
          <tr>
            {result[0] && (
              <>
                <th>Company-ID</th>
                <th>Company-Name</th>
                <th>Job-Title</th>
                <th>Apply-Link</th>
                <th>Salary</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {filter.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row[0]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td><a className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href={row[6]} >Click here</a></td>
              <td>{row[12]}-{row[13]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}
