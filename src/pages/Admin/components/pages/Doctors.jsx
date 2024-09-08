import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AdminTable from "../AdminTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample doctor data
function generateAlphanumericId(length = 8) {
  const chars = 'ABCDEFG0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

const sampleDoctors = [
  { id: "A1B2C3D4", name: "Dr. Alice Brown", specialty: "Cardiology", phone: "123-456-7890", email: "alice.brown@example.com" },
  { id: "E5F6G7H8", name: "Dr. Bob White", specialty: "Neurology", phone: "234-567-8901", email: "bob.white@example.com" },
  { id: "I9J0K1L2", name: "Dr. Carol Green", specialty: "Orthopedics", phone: "345-678-9012", email: "carol.green@example.com" },
  { id: "M3N4O5P6", name: "Dr. David Black", specialty: "Pediatrics", phone: "456-789-0123", email: "david.black@example.com" },
  { id: "Q7R8S9T0", name: "Dr. Emily Adams", specialty: "Dermatology", phone: "567-890-1234", email: "emily.adams@example.com" },
  { id: "U1V2W3X4", name: "Dr. Frank Miller", specialty: "Oncology", phone: "678-901-2345", email: "frank.miller@example.com" },
  { id: "Y5Z6A7B8", name: "Dr. Grace Wilson", specialty: "Gynecology", phone: "789-012-3456", email: "grace.wilson@example.com" },
];


export default function Doctors() {
  const [doctors, setDoctors] = useState(sampleDoctors);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialty: "",
  });

  const handleAddDoctor = () => {
    if (
      newDoctor.name.trim() &&
      newDoctor.specialty.trim()
    ) {
      setDoctors([
        ...doctors,
        {
          id: generateAlphanumericId(),
          name: newDoctor.name,
          specialty: newDoctor.specialty,
        },
      ]);
      setNewDoctor({ name: "", specialty: "" });
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
            <h2 className="text-lg font-semibold">Doctor List</h2>
            <AdminTable data={doctors} />
          </div>
        </TabsContent>
        <TabsContent value="add">
          <div>
            <h2 className="text-lg font-semibold">Add Doctor</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Doctor Name"
                value={newDoctor.name}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Specialty"
                value={newDoctor.specialty}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, specialty: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <Button onClick={handleAddDoctor} className="btn">
              Add Doctor
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
