import { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust according to your actual component library
import { cn } from "@/lib/utils";
import AdminTable from "../AdminTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample patient data
function generateAlphanumericId(length = 8) {
  const chars = 'ABCDEFG0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

// Example usage
const samplePatients = [
  { id: generateAlphanumericId(), name: "John Doe", age: 30, condition: "Flu" },
  { id: generateAlphanumericId(), name: "Jane Smith", age: 45, condition: "Diabetes" },
  { id: generateAlphanumericId(), name: "Emily Johnson", age: 28, condition: "Asthma" },
  { id: generateAlphanumericId(), name: "Michael Brown", age: 60, condition: "Hypertension" },
  { id: generateAlphanumericId(), name: "Sarah Davis", age: 35, condition: "Back Pain" },
  { id: generateAlphanumericId(), name: "David Wilson", age: 50, condition: "Heart Disease" },
  { id: generateAlphanumericId(), name: "Laura Miller", age: 40, condition: "Allergy" },
];

export default function User() {
  const [patients, setPatients] = useState(samplePatients);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    condition: "",
  });

  const handleAddPatient = () => {
    if (
      newPatient.name.trim() &&
      !isNaN(newPatient.age) &&
      newPatient.condition.trim()
    ) {
      // Add patient logic
      setPatients([
        ...patients,
        {
          id: patients.length + 1,
          name: newPatient.name,
          age: parseInt(newPatient.age, 10),
          condition: newPatient.condition,
        },
      ]);
      setNewPatient({ name: "", age: "", condition: "" });
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
            <h2 className="text-lg font-semibold">Patient List</h2>
              <AdminTable data={samplePatients} />
          </div>
        </TabsContent>
        <TabsContent value="add">
          <div>
            <h2 className="text-lg font-semibold">Add Patient</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Patient Name"
                value={newPatient.name}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, name: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Age"
                value={newPatient.age}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, age: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Condition"
                value={newPatient.condition}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, condition: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <Button onClick={handleAddPatient} className="btn">
              Add Patient
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
