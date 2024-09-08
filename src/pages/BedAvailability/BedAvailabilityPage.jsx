// import React, { useContext, useEffect, useState } from "react";
// import { Bed } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { Button } from "@/components/ui/button";
// import { fetchDepartments } from "@/lib/fetchDepartments";
// import { Context } from "@/context/Context";
// import Loading from "../Loading/Loading";
// import Nopage from "../NoPage/Nopage";
// import axios from "axios";

// // const beds = [
// //   {
// //     id: 1,
// //     name: "Room 1",
// //     description:
// //       "This is a general ward with multiple beds for patients, suitable for moderate care and recovery. The ward includes amenities like bedside tables and privacy curtains.",
// //     beds: [
// //       { id: 1, name: "Bed 1", available: true },
// //       { id: 2, name: "Bed 2", available: false },
// //       { id: 3, name: "Bed 3", available: true },
// //       { id: 4, name: "Bed 4", available: false },
// //       { id: 5, name: "Bed 5", available: true },
// //       { id: 6, name: "Bed 6", available: true },
// //       { id: 7, name: "Bed 7", available: false },
// //       { id: 8, name: "Bed 8", available: true },
// //       { id: 9, name: "Bed 9", available: false },
// //       { id: 10, name: "Bed 10", available: true },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     name: "Room 2",
// //     description:
// //       "ICU room equipped with critical care beds for patients needing intensive monitoring and support. This room has advanced medical equipment and isolation facilities.",
// //     beds: [
// //       { id: 11, name: "Bed 11", available: true },
// //       { id: 12, name: "Bed 12", available: true },
// //       { id: 13, name: "Bed 13", available: false },
// //       { id: 14, name: "Bed 14", available: true },
// //       { id: 15, name: "Bed 15", available: false },
// //       { id: 16, name: "Bed 16", available: true },
// //       { id: 17, name: "Bed 17", available: false },
// //       { id: 18, name: "Bed 18", available: true },
// //       { id: 19, name: "Bed 19", available: true },
// //       { id: 20, name: "Bed 20", available: false },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     name: "Room 3",
// //     description:
// //       "Recovery room designed for patients recovering from surgery or serious illness. This room provides comfort and includes facilities for pain management and monitoring.",
// //     beds: [
// //       { id: 21, name: "Bed 21", available: false },
// //       { id: 22, name: "Bed 22", available: true },
// //       { id: 23, name: "Bed 23", available: true },
// //       { id: 24, name: "Bed 24", available: false },
// //       { id: 25, name: "Bed 25", available: true },
// //       { id: 26, name: "Bed 26", available: false },
// //       { id: 27, name: "Bed 27", available: true },
// //       { id: 28, name: "Bed 28", available: false },
// //       { id: 29, name: "Bed 29", available: true },
// //       { id: 30, name: "Bed 30", available: true },
// //     ],
// //   },
// //   {
// //     id: 4,
// //     name: "Room 4",
// //     description:
// //       "Pediatric ward designed for children with specialized care and a playful environment. This room includes child-friendly furnishings and toys.",
// //     beds: [
// //       { id: 31, name: "Bed 31", available: true },
// //       { id: 32, name: "Bed 32", available: false },
// //       { id: 33, name: "Bed 33", available: true },
// //       { id: 34, name: "Bed 34", available: true },
// //       { id: 35, name: "Bed 35", available: false },
// //       { id: 36, name: "Bed 36", available: true },
// //       { id: 37, name: "Bed 37", available: true },
// //       { id: 38, name: "Bed 38", available: false },
// //       { id: 39, name: "Bed 39", available: true },
// //       { id: 40, name: "Bed 40", available: true },
// //     ],
// //   },
// //   {
// //     id: 5,
// //     name: "Room 5",
// //     description:
// //       "Maternity ward for expectant mothers, featuring comfortable beds, privacy, and support for both normal and high-risk deliveries.",
// //     beds: [
// //       { id: 41, name: "Bed 41", available: true },
// //       { id: 42, name: "Bed 42", available: false },
// //       { id: 43, name: "Bed 43", available: true },
// //       { id: 44, name: "Bed 44", available: true },
// //       { id: 45, name: "Bed 45", available: false },
// //       { id: 46, name: "Bed 46", available: true },
// //       { id: 47, name: "Bed 47", available: true },
// //       { id: 48, name: "Bed 48", available: false },
// //       { id: 49, name: "Bed 49", available: true },
// //       { id: 50, name: "Bed 50", available: true },
// //     ],
// //   },
// //   {
// //     id: 6,
// //     name: "Room 6",
// //     description:
// //       "Geriatric ward specifically designed for elderly patients, featuring beds with adjustable positions and easy access to emergency facilities.",
// //     beds: [
// //       { id: 51, name: "Bed 51", available: true },
// //       { id: 52, name: "Bed 52", available: false },
// //       { id: 53, name: "Bed 53", available: true },
// //       { id: 54, name: "Bed 54", available: false },
// //       { id: 55, name: "Bed 55", available: true },
// //       { id: 56, name: "Bed 56", available: true },
// //       { id: 57, name: "Bed 57", available: false },
// //       { id: 58, name: "Bed 58", available: true },
// //       { id: 59, name: "Bed 59", available: true },
// //       { id: 60, name: "Bed 60", available: false },
// //     ],
// //   },
// //   {
// //     id: 7,
// //     name: "Room 7",
// //     description:
// //       "Oncology ward equipped to provide care and treatment for cancer patients, including access to chemotherapy and radiation therapy rooms.",
// //     beds: [
// //       { id: 61, name: "Bed 61", available: true },
// //       { id: 62, name: "Bed 62", available: true },
// //       { id: 63, name: "Bed 63", available: false },
// //       { id: 64, name: "Bed 64", available: true },
// //       { id: 65, name: "Bed 65", available: false },
// //       { id: 66, name: "Bed 66", available: true },
// //       { id: 67, name: "Bed 67", available: true },
// //       { id: 68, name: "Bed 68", available: false },
// //       { id: 69, name: "Bed 69", available: true },
// //       { id: 70, name: "Bed 70", available: true },
// //     ],
// //   },
// //   {
// //     id: 8,
// //     name: "Room 8",
// //     description:
// //       "Orthopedic ward designed for patients recovering from bone surgeries or fractures. Features include specialized beds for mobility assistance and physiotherapy.",
// //     beds: [
// //       { id: 71, name: "Bed 71", available: true },
// //       { id: 72, name: "Bed 72", available: false },
// //       { id: 73, name: "Bed 73", available: true },
// //       { id: 74, name: "Bed 74", available: true },
// //       { id: 75, name: "Bed 75", available: false },
// //       { id: 76, name: "Bed 76", available: true },
// //       { id: 77, name: "Bed 77", available: true },
// //       { id: 78, name: "Bed 78", available: false },
// //       { id: 79, name: "Bed 79", available: true },
// //       { id: 80, name: "Bed 80", available: true },
// //     ],
// //   },
// //   {
// //     id: 9,
// //     name: "Room 9",
// //     description:
// //       "Cardiology ward designed for patients with heart conditions, featuring beds with continuous monitoring and access to emergency cardiac care.",
// //     beds: [
// //       { id: 81, name: "Bed 81", available: true },
// //       { id: 82, name: "Bed 82", available: false },
// //       { id: 83, name: "Bed 83", available: true },
// //       { id: 84, name: "Bed 84", available: false },
// //       { id: 85, name: "Bed 85", available: true },
// //       { id: 86, name: "Bed 86", available: true },
// //       { id: 87, name: "Bed 87", available: false },
// //       { id: 88, name: "Bed 88", available: true },
// //       { id: 89, name: "Bed 89", available: true },
// //       { id: 90, name: "Bed 90", available: false },
// //     ],
// //   },
// //   {
// //     id: 10,
// //     name: "Room 10",
// //     description:
// //       "Neurology ward for patients with neurological disorders, featuring specialized beds for neurological monitoring and rehabilitation.",
// //     beds: [
// //       { id: 91, name: "Bed 91", available: true },
// //       { id: 92, name: "Bed 92", available: true },
// //       { id: 93, name: "Bed 93", available: false },
// //       { id: 94, name: "Bed 94", available: true },
// //       { id: 95, name: "Bed 95", available: false },
// //       { id: 96, name: "Bed 96", available: true },
// //       { id: 97, name: "Bed 97", available: true },
// //       { id: 98, name: "Bed 98", available: false },
// //       { id: 99, name: "Bed 99", available: true },
// //       { id: 100, name: "Bed 100", available: true },
// //     ],
// //   },
// // ];

// function BedAvailabilityPage() {
//   const [selectedBed, setSelectedBed] = useState(null);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const [index, setIndex] = useState();
//   const [roomId, setRoomId] = useState();

//   const { beds, setBeds } = useContext(Context);

//   const updateBedStatus = async (roomId, bedIndex, newStatus) => {
//     setIndex(selectedBed.id);
//       setRoomId(selectedItems[0]?._id);
//     try {
//       const response = await axios.put(
//         `/api/updateRoom/${roomId}/beds/${index}`,
//         {
//           available: newStatus,
//         }
//       );

//       console.log("Bed status updated successfully:", response.data);
//       // You can add a success toast here if you're using toast
//     } catch (error) {
//       console.error("Error updating bed status:", error);
//       // Handle error (e.g., show error message or toast)
//     }
//   };

//   console.log("selected Item, ", selectedItems);
//   console.log("selected Bed, ", selectedBed);

//   const handleConfirmSelection = async () => {
//     setLoading(true);
//     const toastId = toast.loading("Booking selection...");

//     try {
//       updateBedStatus(roomId, index, false).then(()=>{
//         toast.success("Selection confirmed!", { id: toastId });
//       })
//     } catch (error) {
//       // Error toast
//       toast.error("Failed to confirm selection.");
//       console.error("Error:", error);
//     }
//   };

//   const handleClearSelection = () => {
//     setLoading(false);
//     setSelectedItems([]);
//     setSelectedBed(null); // Clear the selected bed as well
//     console.log("Selection cleared.");
//   };

//   const handleBedClick = (bed) => {
//     if (bed.available) {
//       setSelectedBed(bed);
//       setSelectedItems([bed]);
//     }
//   };

//   const getRoomStats = (beds) => {
//     const availableCount = beds.filter((bed) => bed.available).length;
//     const unavailableCount = beds.length - availableCount;
//     return { availableCount, unavailableCount };
//   };

//   useEffect(() => {
//     const getBeds = async () => {
//       try {
//         setLoading(true);
//         const beds = await fetchDepartments({ route: "/getRooms" });
//         console.log("Beds", beds);
//         setBeds(beds);
//       } catch (error) {
//         console.log("Error from component", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getBeds();
//   }, []);

//   if (loading) return <Loading />;
//   if (error) return <Nopage />;
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">Bed Availability</h1>

//       {beds?.map((room, idx) => {
//         const { availableCount, unavailableCount } = getRoomStats(room.beds);

//         return (
//           <div key={idx} className="mb-12">
//             <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
//               <h2 className="text-3xl font-semibold mb-2">{room.name}</h2>
//               <p className="text-md text-gray-600 mb-4">{room.description}</p>
//               <p className="text-md mb-4">
//                 Available Beds:{" "}
//                 <span className="font-bold text-green-600">
//                   {availableCount}
//                 </span>{" "}
//                 | Unavailable Beds:{" "}
//                 <span className="font-bold text-red-600">
//                   {unavailableCount}
//                 </span>
//               </p>
//               <div className="grid grid-cols-7 gap-6">
//                 {room?.beds?.map((bed) => (
//                   <div
//                     key={bed.id}
//                     className={`relative p-4 border border-gray-300 rounded-lg cursor-pointer transition-transform transform ${
//                       bed.id == selectedBed?.id ? "bg-red-200" : "bg-green-200"
//                     }  ${
//                       bed.available
//                         ? "bg-green-200 hover:scale-105"
//                         : "cursor-not-allowed bg-red-200"
//                     }`}
//                     onClick={() => handleBedClick(bed)}
//                   >
//                     <div className="flex items-center justify-center flex-col h-full">
//                       <Bed
//                         className={`text-4xl ${
//                           bed.available ? "text-green-600" : "text-red-600"
//                         } ${
//                           bed.id == selectedBed?.id
//                             ? "text-red-600"
//                             : "text-green-600"
//                         }`}
//                       />
//                       <h3 className="text-lg font-semibold text-center mt-2">
//                         {bed.name}
//                       </h3>
//                       <p
//                         className={`mt-2 text-sm ${
//                           bed.available ? "text-green-800" : "text-red-800"
//                         }`}
//                       >
//                         {selectedBed?.id === bed.id
//                           ? "Not Available"
//                           : bed.available
//                           ? "Available"
//                           : "Not Available"}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       {selectedBed && (
//         <div className="fixed bottom-0 left-0 w-full bg-black/50 flex">
//           <div className="right-0 px-5 flex items-center justify-between w-full py-3 border border-gray-300 rounded-lg bg-blue-50 shadow-lg m-3">
//             <div className="info">
//               <h2 className="text-xl font-semibold">Selected Bed</h2>
//               <p className="mt-2">
//                 You have selected:{" "}
//                 <span className="font-bold">{selectedBed.name}</span>
//               </p>
//               <p className="text-sm mt-2">
//                 Status:{" "}
//                 <span
//                   className={`font-bold ${
//                     selectedBed.available ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {selectedBed.available ? "Available" : "Not Available"}
//                 </span>
//               </p>
//             </div>
//             <div className="buttons flex flex-col gap-3">
//               <Button
//                 onClick={handleConfirmSelection}
//                 className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded"
//               >
//                 Confirm Selection
//               </Button>
//               <Button
//                 disabled={loading}
//                 onClick={handleClearSelection}
//                 className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded"
//               >
//                 Clear Selection
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BedAvailabilityPage;


// function BedAvailabilityPage() {
//     const [selectedBed, setSelectedBed] = useState(null);
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);
  
//     const [index, setIndex] = useState(null);
//     const [roomId, setRoomId] = useState(null);
  
//     const { beds, setBeds } = useContext(Context);
  
//     const updateBedStatus = async (roomId, bedIndex, newStatus) => {
//       try {
//         const response = await axios.put(
//           `/api/updateRoom/${roomId}/beds/${bedIndex}`,
//           {
//             available: newStatus,
//           }
//         );
  
//         console.log("Bed status updated successfully:", response.data);
//         // You can add a success toast here if you're using toast
//       } catch (error) {
//         console.error("Error updating bed status:", error);
//         // Handle error (e.g., show error message or toast)
//       }
//     };
  
//     const handleConfirmSelection = async () => {
//       if (roomId == null || index == null) {
//         console.error("Room ID or bed index is not set.");
//         return;
//       }
  
//       setLoading(true);
//       const toastId = toast.loading("Booking selection...");
  
//       try {
//         await updateBedStatus(roomId, index, false);
//         toast.success("Selection confirmed!", { id: toastId });
//       } catch (error) {
//         toast.error("Failed to confirm selection.");
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     const handleClearSelection = () => {
//       setLoading(false);
//       setSelectedItems([]);
//       setSelectedBed(null);
//       setRoomId(null);
//       setIndex(null);
//       console.log("Selection cleared.");
//     };
  
//     const handleBedClick = (bed, room) => {
//       if (bed.available) {
//         setSelectedBed(bed);
//         setSelectedItems([bed]);
//         setRoomId(room.id); // Set the roomId
//         setIndex(getSelectedBedIndex(room.beds, bed)); // Set the index
//       }
//     };
  
//     const getRoomStats = (beds) => {
//       const availableCount = beds.filter((bed) => bed.available).length;
//       const unavailableCount = beds.length - availableCount;
//       return { availableCount, unavailableCount };
//     };
  
//     useEffect(() => {
//       const getBeds = async () => {
//         try {
//           setLoading(true);
//           const beds = await fetchDepartments({ route: "/getRooms" });
//           setBeds(beds);
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
//       getBeds();
//     }, [setBeds]);
  
//     if (loading) return <Loading />;
//     if (error) return <Nopage />;
  
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold text-center mb-6">Bed Availability</h1>
  
//         {beds?.map((room, idx) => {
//           const { availableCount, unavailableCount } = getRoomStats(room.beds);
  
//           return (
//             <div key={idx} className="mb-12">
//               <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
//                 <h2 className="text-3xl font-semibold mb-2">{room.name}</h2>
//                 <p className="text-md text-gray-600 mb-4">{room.description}</p>
//                 <p className="text-md mb-4">
//                   Available Beds:{" "}
//                   <span className="font-bold text-green-600">
//                     {availableCount}
//                   </span>{" "}
//                   | Unavailable Beds:{" "}
//                   <span className="font-bold text-red-600">
//                     {unavailableCount}
//                   </span>
//                 </p>
//                 <div className="grid grid-cols-7 gap-6">
//                   {room?.beds?.map((bed) => (
//                     <div
//                       key={bed.id}
//                       className={`relative p-4 border border-gray-300 rounded-lg cursor-pointer transition-transform transform ${
//                         bed.id === selectedBed?.id ? "bg-red-200" : "bg-green-200"
//                       }  ${
//                         bed.available
//                           ? "bg-green-200 hover:scale-105"
//                           : "cursor-not-allowed bg-red-200"
//                       }`}
//                       onClick={() => handleBedClick(bed, room)}
//                     >
//                       <div className="flex items-center justify-center flex-col h-full">
//                         <Bed
//                           className={`text-4xl ${
//                             bed.available ? "text-green-600" : "text-red-600"
//                           } ${
//                             bed.id === selectedBed?.id
//                               ? "text-red-600"
//                               : "text-green-600"
//                           }`}
//                         />
//                         <h3 className="text-lg font-semibold text-center mt-2">
//                           {bed.name}
//                         </h3>
//                         <p
//                           className={`mt-2 text-sm ${
//                             bed.available ? "text-green-800" : "text-red-800"
//                           }`}
//                         >
//                           {selectedBed?.id === bed.id
//                             ? "Not Available"
//                             : bed.available
//                             ? "Available"
//                             : "Not Available"}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
  
//         {selectedBed && (
//           <div className="fixed bottom-0 left-0 w-full bg-black/50 flex">
//             <div className="right-0 px-5 flex items-center justify-between w-full py-3 border border-gray-300 rounded-lg bg-blue-50 shadow-lg m-3">
//               <div className="info">
//                 <h2 className="text-xl font-semibold">Selected Bed</h2>
//                 <p className="mt-2">
//                   You have selected:{" "}
//                   <span className="font-bold">{selectedBed.name}</span>
//                 </p>
//                 <p className="text-sm mt-2">
//                   Status:{" "}
//                   <span
//                     className={`font-bold ${
//                       selectedBed.available ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {selectedBed.available ? "Available" : "Not Available"}
//                   </span>
//                 </p>
//               </div>
//               <div className="buttons flex flex-col gap-3">
//                 <Button
//                   onClick={handleConfirmSelection}
//                   className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded"
//                 >
//                   Confirm Selection
//                 </Button>
//                 <Button
//                   disabled={loading}
//                   onClick={handleClearSelection}
//                   className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded"
//                 >
//                   Clear Selection
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default BedAvailabilityPage;
  


import React, { useContext, useEffect, useState } from "react";
import { Bed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { fetchDepartments } from "@/lib/fetchDepartments";
import { Context } from "@/context/Context";
import Loading from "../Loading/Loading";
import Nopage from "../NoPage/Nopage";
import axios from "axios";

// Function to find the index of the selected bed
const getSelectedBedIndex = (beds, bedId) => {
  return beds.findIndex(bed => bed.id === bedId);
};

function BedAvailabilityPage() {
  const [selectedBed, setSelectedBed] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [index, setIndex] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const { beds, setBeds } = useContext(Context);
    const api = import.meta.env.VITE_SHIVAM;
  const updateBedStatus = async (roomId, bedIndex, newStatus) => {
    try {
      const response = await axios.put(
        `${api}/updateRooms/${roomId}/beds/${bedIndex}`,
        {
          available: newStatus,
        }
      );

      console.log("Bed status updated successfully:", response.data);
      // You can add a success toast here if you're using toast
    } catch (error) {
      console.error("Error updating bed status:", error);
      // Handle error (e.g., show error message or toast)
    }
  };

  const handleConfirmSelection = async () => {
    if (selectedBed && index !== null && roomId) {
      setLoading(true);
      const toastId = toast.loading("Booking selection...");

      try {
        await updateBedStatus(roomId, index, false).then(()=> toast.success("Selection confirmed!", { id: toastId }));
      } catch (error) {
        toast.error("Failed to confirm selection.", {id: toastId});
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("No bed selected.");
    }
  };

  const handleClearSelection = () => {
    setLoading(false);
    setSelectedItems([]);
    setSelectedBed(null);
    setIndex(null);
    setRoomId(null);
    console.log("Selection cleared.");
  };

  const handleBedClick = (bed, room) => {
    if (bed.available) {
      const bedIndex = getSelectedBedIndex(room.beds, bed.id);
      setSelectedBed(bed);
      setSelectedItems([bed]);
      setIndex(bedIndex);
      setRoomId(room._id);
    }
  };

  const getRoomStats = (beds) => {
    const availableCount = beds.filter((bed) => bed.available).length;
    const unavailableCount = beds.length - availableCount;
    return { availableCount, unavailableCount };
  };

  useEffect(() => {
    const getBeds = async () => {
      try {
        setLoading(true);
        const beds = await fetchDepartments({ route: "/getRooms" });
        console.log("Beds", beds);
        setBeds(beds);
      } catch (error) {
        console.log("Error from component", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBeds();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Nopage />;
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Bed Availability</h1>

      {beds?.map((room, idx) => {
        const { availableCount, unavailableCount } = getRoomStats(room.beds);

        return (
          <div key={idx} className="mb-12">
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-2">{room.name}</h2>
              <p className="text-md text-gray-600 mb-4">{room.description}</p>
              <p className="text-md mb-4">
                Available Beds:{" "}
                <span className="font-bold text-green-600">
                  {availableCount}
                </span>{" "}
                | Unavailable Beds:{" "}
                <span className="font-bold text-red-600">
                  {unavailableCount}
                </span>
              </p>
              <div className="grid grid-cols-7 gap-6">
                {room?.beds?.map((bed) => (
                  <div
                    key={bed.id}
                    className={`relative p-4 border border-gray-300 rounded-lg cursor-pointer transition-transform transform ${
                      bed.id === selectedBed?.id ? "bg-red-200" : "bg-green-200"
                    }  ${
                      bed.available
                        ? "bg-green-200 hover:scale-105"
                        : "cursor-not-allowed bg-red-200"
                    }`}
                    onClick={() => handleBedClick(bed, room)}
                  >
                    <div className="flex items-center justify-center flex-col h-full">
                      <Bed
                        className={`text-4xl ${
                          bed.available ? "text-green-600" : "text-red-600"
                        } ${
                          bed.id === selectedBed?.id
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      />
                      <h3 className="text-lg font-semibold text-center mt-2">
                        {bed.name}
                      </h3>
                      <p
                        className={`mt-2 text-sm ${
                          bed.available ? "text-green-800" : "text-red-800"
                        }`}
                      >
                        {selectedBed?.id === bed.id
                          ? "Not Available"
                          : bed.available
                          ? "Available"
                          : "Not Available"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {selectedBed && (
        <div className="fixed bottom-0 left-0 w-full bg-black/50 flex">
          <div className="right-0 px-5 flex items-center justify-between w-full py-3 border border-gray-300 rounded-lg bg-blue-50 shadow-lg m-3">
            <div className="info">
              <h2 className="text-xl font-semibold">Selected Bed</h2>
              <p className="mt-2">
                You have selected:{" "}
                <span className="font-bold">{selectedBed.name}</span>
              </p>
              <p className="text-sm mt-2">
                Status:{" "}
                <span
                  className={`font-bold ${
                    selectedBed.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {selectedBed.available ? "Available" : "Not Available"}
                </span>
              </p>
            </div>
            <div className="buttons flex flex-col gap-3">
              <Button
                onClick={handleConfirmSelection}
                className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded"
              >
                Confirm Selection
              </Button>
              <Button
                disabled={loading}
                onClick={handleClearSelection}
                className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded"
              >
                Clear Selection
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BedAvailabilityPage;
