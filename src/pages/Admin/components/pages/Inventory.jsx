import { useState } from "react";
import { Button } from "@/components/ui/button";
import AdminTable from "../AdminTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Function to generate alphanumeric IDs
function generateAlphanumericId(length = 8) {
  const chars = 'ABCDEFG0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

const sampleMedicines = [
    { id: "X1Y2Z3A4", name: "Aspirin", dosage: "500mg", type: "Painkiller", manufacturer: "PharmaCorp", expiryDate: "2025-12-31" },
    { id: "B5C6D7E8", name: "Ibuprofen", dosage: "200mg", type: "Anti-inflammatory", manufacturer: "MediPlus", expiryDate: "2026-05-15" },
    { id: "F9G0H1I2", name: "Paracetamol", dosage: "500mg", type: "Antipyretic", manufacturer: "HealthCare", expiryDate: "2024-11-20" },
    { id: "J3K4L5M6", name: "Amoxicillin", dosage: "250mg", type: "Antibiotic", manufacturer: "BioMed", expiryDate: "2025-07-10" },
    { id: "N7O8P9Q0", name: "Metformin", dosage: "500mg", type: "Anti-diabetic", manufacturer: "GlobePharma", expiryDate: "2024-09-30" },
    { id: "R1S2T3U4", name: "Loratadine", dosage: "10mg", type: "Antihistamine", manufacturer: "AllergyRelief", expiryDate: "2026-03-25" },
    { id: "V5W6X7Y8", name: "Hydrochlorothiazide", dosage: "25mg", type: "Diuretic", manufacturer: "HeartCare", expiryDate: "2025-10-05" },
    { id: "Z9A0B1C2", name: "Omeprazole", dosage: "20mg", type: "Proton Pump Inhibitor", manufacturer: "StomachRelief", expiryDate: "2024-12-12" },
    { id: "D3E4F5G6", name: "Simvastatin", dosage: "40mg", type: "Cholesterol Lowering", manufacturer: "CardioPharma", expiryDate: "2025-06-28" },
    { id: "H7I8J9K0", name: "Prednisone", dosage: "10mg", type: "Corticosteroid", manufacturer: "InflammationCare", expiryDate: "2024-10-10" },
  ];
  

export default function Inventory() {
  const [medicines, setMedicines] = useState(sampleMedicines);
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    dosage: "",
    type: "",
    manufacturer: "",
    expiryDate: "",
  });

  const handleAddMedicine = () => {
    if (
      newMedicine.name.trim() &&
      newMedicine.dosage.trim() &&
      newMedicine.type.trim() &&
      newMedicine.manufacturer.trim() &&
      newMedicine.expiryDate.trim()
    ) {
      setMedicines([
        ...medicines,
        {
          id: generateAlphanumericId(),
          name: newMedicine.name,
          dosage: newMedicine.dosage,
          type: newMedicine.type,
          manufacturer: newMedicine.manufacturer,
          expiryDate: newMedicine.expiryDate,
        },
      ]);
      setNewMedicine({
        name: "",
        dosage: "",
        type: "",
        manufacturer: "",
        expiryDate: "",
      });
      setView("list");
    }
  };

  return (
    <div className="p-4">
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="add">Add</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <div>
            <h2 className="text-lg font-semibold">Medicine List</h2>
            <AdminTable data={medicines} />
          </div>
        </TabsContent>
        <TabsContent value="add">
          <div>
            <h2 className="text-lg font-semibold">Add Medicine</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Medicine Name"
                value={newMedicine.name}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, name: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Dosage"
                value={newMedicine.dosage}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, dosage: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Type"
                value={newMedicine.type}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, type: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Manufacturer"
                value={newMedicine.manufacturer}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, manufacturer: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="date"
                placeholder="Expiry Date"
                value={newMedicine.expiryDate}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, expiryDate: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <Button onClick={handleAddMedicine} className="btn">
              Add Medicine
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
