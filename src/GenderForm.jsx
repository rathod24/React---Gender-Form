import React,{useState} from 'react'

const GenderForm = () => {
  const [selectedRadioOption, setSelectedRadioOption] = useState('');
  const [selectedOption,setSelectedOption]=useState("")

  const handleOptionChange = (event) => {
    setSelectedRadioOption(event.target.value);
  };
  const handleSelectChange=(e)=>{
     setSelectedOption(e.target.value)
  }
  return (
    <div>
      <div>
      <h1>Select your Gender :</h1>
      <label>
        <input
          type="radio"
          value="Male"
          checked={selectedRadioOption === 'Male'}
          onChange={handleOptionChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          checked={selectedRadioOption === 'Female'}
          onChange={handleOptionChange}
        />
        Female
      </label>
      </div>
      
     <div>
      <h1>Select your shirt Size :</h1>
     <label>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Choose your size --</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </label>
     </div>
     { selectedRadioOption&&<p><b>{selectedRadioOption} - {selectedOption}</b></p>}
    </div>
  );
};

export default GenderForm