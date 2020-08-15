// // https://daveceddia.com/usestate-hook-examples/

// import React , {useState, useEffect} from 'react';

// export default function App(){

//   const [time, setTime] = useState({
//     minTime : '24',
//     maxTime : '3600',
//     choosenTime : ''
//   })

//   const [form, setForm] = useState({
//     minTimeNum  : '1',
//     minTimeUnit : 'days',
//     maxTimeNum  : '5',
//     maxTimeUnit : 'months'
//   })

//   useEffect(() => {

//   }, [form])

//   useEffect((e) => {
//     console.log(e)
//     // setTime({
//     //   ...time,

//     // })
//   }, [time])

//   return(
//     <div>

//       <form>
//         <label>Minimum time</label>

//         <br/>

//         <input
//           name="minTime"
//           placeholder="1">
//         </input>

//         <select
//           onChange={}
//         >
//           <option value="hours">hour(s)</option>
//           <option value="days">day(s)</option>
//           <option value="months">month(s)</option>
//           <option value="year">year</option>
//         </select>

//       </form>

//     </div>
//   )
// }
