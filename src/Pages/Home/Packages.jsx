
// import { useState } from "react"

// const Packages = () => {
//   const [billingCycle, setBillingCycle] = useState("monthly")

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#221F42] p-4">
//       <div className="container p-10 py-20 w-full shadow-xl bg-[#1E1C3B] shadow-gray-900 rounded-lg">
//         <h2 className="text-3xl font-semibold text-white text-center mb-8">Packages</h2>

//         {/* Billing toggle */}
//         <div className="flex justify-center space-x-6 mb-12">
//           <button
//             className={`text-white px-4 py-2 rounded-md ${billingCycle === "monthly" ? "font-bold" : "opacity-70"}`}
//             onClick={() => setBillingCycle("monthly")}
//           >
//             Monthly
//           </button>
//           <button
//             className={`text-white px-4 py-2 rounded-md ${billingCycle === "yearly" ? "font-bold" : "opacity-70"}`}
//             onClick={() => setBillingCycle("yearly")}
//           >
//             Yearly
//           </button>
//         </div>

//         {/* Pricing cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Free User */}
//          <div className="bg-[#15132F] py-10">
//              <div className="overflow-hidden relative">
//             <div className="bg-[#2c1f52] py-3 px-6 relative w-2/3 rounded-r-lg">
//               <div className="absolute right-0 top-0 h-full w-12 overflow-hidden">
              
//               </div>
//               <h3 className="text-white font-medium">Free User</h3>
//             </div>

//             <div className="p-6">
//               <div className="mb-6">
//                 <div className="flex items-end">
//                   <span className="text-4xl font-bold text-white">3</span>
//                   <span className="text-sm text-white ml-2 mb-1">Query/Day</span>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-1">Measurable results</p>
//               </div>

//               <button className="w-full bg-[#2c1f52] text-white py-2 rounded-md mb-4">Select</button>

//               <p className="text-gray-400 text-xs mb-6">Contact us for more details</p>

//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <span className="text-white font-medium">Features</span>
//                   <div className="ml-2 w-4 h-4 rounded-full bg-[#2c1f52] flex items-center justify-center">
//                     <span className="text-white text-xs">?</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-2 text-sm text-gray-300">
//                   <li>Includes general source databases</li>
//                   <li>Limited free queries per full day</li>
//                   <li>No access to specific company or private databases</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//          </div>

//           {/* Paid User */}
//           <div className="bg-[#15132F] py-10">
// <div className="bg-[#15132F] overflow-hidden relative">
//             <div className="bg-[#2c1f52] py-3 px-6 relative w-2/3 rounded-r-lg">
            
//               <h3 className="text-white font-medium">Paid User</h3>
//             </div>

//             <div className="p-6">
//               <div className="mb-6">
//                 <div className="flex items-end">
//                   <span className="text-2xl font-bold text-white">No limit,</span>
//                   <span className="text-sm text-white ml-2 mb-1">Query/Day</span>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-1">Measurable results</p>
//               </div>

//               <button className="w-full bg-[#2c1f52] text-white py-2 rounded-md mb-4">Select</button>

//               <p className="text-gray-400 text-xs mb-6">Contact us for more details</p>

//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <span className="text-white font-medium">Features</span>
//                   <div className="ml-2 w-4 h-4 rounded-full bg-[#2c1f52] flex items-center justify-center">
//                     <span className="text-white text-xs">?</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-2 text-sm text-gray-300">
//                   <li>Full access to general source databases</li>
//                   <li>Unlimited queries per full day</li>
//                   <li>Potential limitations on account sharing</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           </div>

//           {/* Enterprise Users */}
//          <div className="bg-[#15132F] py-10">
//              <div className="bg-[#15132F] overflow-hidden relative">
//             <div className="bg-[#2c1f52] py-3 px-6 relative w-2/3 rounded-r-lg">
//               <h3 className="text-white font-medium">Enterprise Users</h3>
//             </div>

//             <div className="p-6">
//               <div className="mb-6">
//                 <div className="flex items-end">
//                   <span className="text-2xl font-bold text-white">No limit,</span>
//                   <span className="text-sm text-white ml-2 mb-1">Query/Day</span>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-1">Measurable results</p>
//               </div>

//               <button className="w-full bg-[#2c1f52] text-white py-2 rounded-md mb-4">Select</button>

//               <p className="text-gray-400 text-xs mb-6">Contact us for more details</p>

//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <span className="text-white font-medium">Features</span>
//                   <div className="ml-2 w-4 h-4 rounded-full bg-[#2c1f52] flex items-center justify-center">
//                     <span className="text-white text-xs">?</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-2 text-sm text-gray-300">
//                   <li>Includes general source databases</li>
//                   <li>Unlimited queries per full day</li>
//                   <li>Company-specific Personal Database</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//          </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Packages





import { useState } from "react";
import { GoCheck } from "react-icons/go";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#221F42] p-4">
      <div className="container p-10 py-20 w-full shadow-xl bg-[#1E1C3B] shadow-gray-900 rounded-lg">
        <h2 className="text-3xl text-[#D0CDEF] font-semibold text-center mb-8">Packages</h2>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex bg-gray-600 rounded-full p-1">
            {/* Toggle Container */}
            <div className="relative flex">
              {/* Background highlight for active state */}
              <span
                className={`absolute top-0 h-full w-1/2 bg-[#15132F] rounded-full transition-transform duration-300 ease-in-out ${
                  billingCycle === "monthly" ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>

              {/* Monthly Button */}
              <button
                className="relative z-10 px-4 py-2 text-[#D0CDEF] font-medium w-24 text-center"
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>

              {/* Yearly Button */}
              <button
                className="relative z-10 px-4 py-2 text-[#D0CDEF] font-medium w-24 text-center"
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-20">
          {/* Free User */}
          <div className="bg-[#15132F] py-10">
            <div className="overflow-hidden relative">
              <div className="bg-[#2c1f52] py-3 px-6 relative w-2/3 rounded-r-lg">
                <h3 className="text-white font-medium">Free User</h3>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">3</span>
                    <span className="text-sm text-white ml-2 mb-1">Query/Day</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Measurable results</p>
                </div>

                <button className="w-full bg-[#2c1f52] text-white py-2 rounded-md mb-4">Select</button>

                <p className="text-gray-400 text-xs mb-6">Contact us for more details</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-white font-medium">Features</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-[#ABA9E6] flex items-center justify-center">
                      <span className="text-black font-semibold text-base"><GoCheck />
</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Includes general source databases</li>
                    <li>Limited free queries per full day</li>
                    <li>No access to specific company or private databases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paid User */}
          <div className="bg-[#15132F] py-10">
            <div className="bg-[#15132F] overflow-hidden relative">
              <div className="bg-[#2c1f52] py-3 px-6 relative w-2/3 rounded-r-lg">
                <h3 className="text-white font-medium">Paid User</h3>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-white">No limit,</span>
                    <span className="text-sm text-white ml-2 mb-1">Query/Day</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Measurable results</p>
                </div>

                <button className="w-full bg-[#2c1f52] text-white py-2 rounded-md mb-4">Select</button>

                <p className="text-gray-400 text-xs mb-6">Contact us for more details</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-white font-medium">Features</span>
                   <div className="ml-2 w-5 h-5 rounded-full bg-[#ABA9E6] flex items-center justify-center">
                      <span className="text-black font-semibold text-base"><GoCheck />
</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Full access to general source databases</li>
                    <li>Unlimited queries per full day</li>
                    <li>Potential limitations on account sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Users */}
          <div className="bg-[#15132F] py-10">
            <div className="bg-[#15132F] overflow-hidden relative">
              <div className="bg-[#2c1f52] py-3 px-6 relative w-2/3 rounded-r-lg">
                <h3 className="text-white font-medium">Enterprise Users</h3>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-white">No limit,</span>
                    <span className="text-sm text-white ml-2 mb-1">Query/Day</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Measurable results</p>
                </div>

                <button className="w-full bg-[#2c1f52] text-white py-2 rounded-md mb-4">Select</button>

                <p className="text-gray-400 text-xs mb-6">Contact us for more details</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-white font-medium">Features</span>
                  <div className="ml-2 w-5 h-5 rounded-full bg-[#ABA9E6] flex items-center justify-center">
                      <span className="text-black font-semibold text-base"><GoCheck />
</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Includes general source databases</li>
                    <li>Unlimited queries per full day</li>
                    <li>Company-specific Personal Database</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;