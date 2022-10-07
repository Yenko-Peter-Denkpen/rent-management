
import React, {useState} from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

// function AddHouse( {submit}) {
//     const [house, setAddHouse] = useState({
//         location:"",
//         category:"",
//         facilities:"",
//         numofrooms:"",
//         address:"",
//         contact:"",
//         price:"",
//         image:""
//     });
//     const handler =(event) => {
//         setAddHouse((prev) => ({
//             ...prev,
//         [event.target.name]: event.target.value,
//         }));
//     };
//     const handleForm = (e) =>{
//         e.preventDefault();
//         submit(house);
//     };
//   return (
//     <div>
//       <NavBar/>
//       <div className="formContainer">
//       <h3>Add new house</h3>
//       <form>
//       <fieldset>
//       <legend>House Data</legend>
//       <div className="location">
//       <div className="N">
//       <label>
//       Lacation
//       <input
//       loction="location"
//       value={house.lacation}
//       type="text"
//       onChange={handler}
//       />
//       </label>
//       </div>
//       </div>
//       <div className="lacation">
//       <div className="W">
//       <label>
//       category
//       <input
//       category="category"
//       value={house.category}
//       type="text"
//       onChange={handler}
//       />
//       </label>
//       </div>
//       <div className="category">
//       <div className="W">
//       <label>
//       facilities
//       <input
//       facilities="facilities"
//       value={house.facilities}
//       type="text"
//       onChange={handler}
//       />
    
//       </label>
//       </div>
//       <div className="facilities">
//       <div className="W">
//       <label>
//       numofrooms
//       <input
//       numofrooms="numofrooms"
//       value={house.numofrooms}


function AddHouse({ submit }) {
    const [house, setAddHouse] = useState({
                location:"",
                category:"",
                facilities:"",
                numofrooms:"",
                address:"",
                contact:"",
                price:"",
                image:""
            });
  
    const handler = (event) => {
      setAddHouse((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };
    const handleForm = (e) => {
      e.preventDefault();
      submit(house);
    };
    return (
      <div>
        
        <NavBar />
        <div className="formContainer">
          <h3>Add New house</h3>
          <form>
            <fieldset>
              <legend>House Data</legend>
              <div className="names">
                <div className="N">
                  <label>
                    location
                    <input
                      name="lacation"
                      value={house.location}
                      type="text"
                      onChange={handler}
                    />
                  </label>
                </div>
              </div>
              <div className="location">
                <div className="W">
                  <label>
                    category
                    <input
                      name="category"
                      value={house.category}
                      type="text"
                      onChange={handler}
                    />
                  </label>
                </div>
                </div>
                <div className="Y">
                  <label>
                    {" "}
                    facilities
                    <input
                      name="facilities"
                      type="number"
                      value={house.facilities}
                      onChange={handler}
                    />
                  </label>
                </div>
                <div className="L">
                  <label>
                    numofrooms
                    <input
                      name="numofrooms"
                      value={house.numofrooms}
                      type="text"
                      onChange={handler}
                    />
                  </label>
                </div>
                <div className="L">
                  <label>
                    address
                    <input
                      name="address"
                      value={house.address}
                      type="text"
                      onChange={handler}
                    />
                  </label>
                </div>
                <div className="L">
                  <label>
                    contact
                    <input
                      name="contact"
                      value={house.contact}
                      type="text"
                      onChange={handler}
                    />
                  </label>
                </div>
                <div className="L">
            
                  <label>
                    price
                    <input
                      name="price"
                      value={house.price}
                      type="text"
                      onChange={handler}
                    />
                  </label>
                </div>
              
           
            </fieldset>
            <button className="form" onClick={handleForm}>
              Add new house
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default AddHouse;