import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// const Form = () => {
//   const [data, setdata] = useState({ fname: "", lname: "" });

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(data);
//     setdata({ fname: "", lname: "" });
//   }

//   function onhandleChange(e) {
//     console.log(e.target.value, e.target.name);
//     setdata({...data, [e.target.name]: e.target.value});
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <lable htmlFor="fname">
//             First Name :
//             <input id="fname" value={data.fname} onChange={onhandleChange} name="fname" type="text" />
//           </lable>
//           <br/>
//           <lable htmlFor="lname">
//             Last Name :
//             <input id="lname" value={data.lname} onChange={onhandleChange} name="lname" type="text" />
//           </lable>
//           <br/>
//           <button type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// const Form = () => {
//   const [data, setdata] = useState({ fname: "", lname: "" })

//   function handleSubmit(a) {
//     a.preventDefault();
//     console.log(data);
//     setdata({ fname: "", lname: "" })
//   }

//   function handleChange(b) {
//     console.log(b.target.value, b.target.name);
//     setdata({ ...data, [b.target.name]: b.target.value })
//   }


//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <fieldset>
//             <label htmlFor="fname">
//               Frist Name:
//               <input id="fname" value={data.fname} onChange={handleChange} name="fname" type="text" />
//             </label>

//             <br />

//             <lable htmlFor="lname">
//               Last Name:
//               <input id="lname" value={data.lname} onChange={handleChange} name="lname" type="text" />
//             </lable>

//             <br />

//             <button type="submit">Submit</button>
//           </fieldset>
//         </form>
//       </div>
//     </>
//   )
// }





// export default Form;



// const Form = () => {
//   const [data, setdata] = useState({ fname: "", lname: "" });

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(data);
//     setdata({ fname: "", lname: "" })
//   }

//   function handleChange(e) {
//     console.log(e.target.value, e.target.name);
//     setdata({ ...data, [e.target.name]: e.target.value });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <label htmlFor="fname">
//             First Name
//             <input id="fname" value={data.fname} onChange={handleChange} name="fname" type="text" />
//           </label>
//           <label htmlFor="lname">
//             Last Name
//             <input id="lname" value={data.lname} onChange={handleChange} name="lname" type="text" />
//           </label>
//           <button type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

const Form = () => {
  const [data, setdata] = useState({ fname: "", lname: "" })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setdata({ fname: "", lname: "" })

  }

  function handleChange(a) {
    console.log(a.target.value, a.target.name);
    setdata({ ...data, [a.target.name]: a.target.value })
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <lable htmlFor="fname">
              Frist Name:
              <input id="fname" value={data.fname} onChange={handleChange} name="fname" type="text"></input>
            </lable>
            <br/>
            <lable htmlFor="lname">
              Frist Name:
              <input id="lname" value={data.lname} onChange={handleChange} name="lname" type="text"></input>
            </lable>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>

    </>
  );
};





export default Form;