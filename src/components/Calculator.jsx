
export default function Calculator({setData, data}) {


  function handleDataChange(inputIdentifier, newValue) {
    setData((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div id="user-input">
      <div>
        <label htmlFor="">Initial investment</label>
        <input type="number" value={data['initialInvestment']} required onChange={(e) => handleDataChange('initialInvestment', e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Annual investment</label>
        <input type="number" value={data['annualInvestment']} required onChange={(e) => handleDataChange('annualInvestment', e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Expected return</label>
        <input type="number" value={data['expectedReturn']} required onChange={(e) => handleDataChange('expectedReturn', e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Duration</label>
        <input type="number" value={data['duration']} required onChange={(e) => handleDataChange('duration', e.target.value)}/>
      </div>
    </div>
  );
}
