import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AdminTable from "../AdminTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample department data
function generateAlphanumericId(length = 8) {
  const chars = 'ABCDEFG0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

const sampleDepartments = [
  { id: "A1B2C3D4", name: "Cardiology", head: "Dr. Alice Brown", location: "Building A, Floor 2", contactNumber: "123-456-7890" },
  { id: "E5F6G7H8", name: "Neurology", head: "Dr. Bob White", location: "Building B, Floor 3", contactNumber: "234-567-8901" },
  { id: "I9J0K1L2", name: "Orthopedics", head: "Dr. Carol Green", location: "Building C, Floor 1", contactNumber: "345-678-9012" },
  { id: "M3N4O5P6", name: "Pediatrics", head: "Dr. David Black", location: "Building D, Floor 4", contactNumber: "456-789-0123" },
  { id: "Q7R8S9T0", name: "Dermatology", head: "Dr. Emily Adams", location: "Building E, Floor 2", contactNumber: "567-890-1234" },
  { id: "U1V2W3X4", name: "Oncology", head: "Dr. Frank Miller", location: "Building F, Floor 5", contactNumber: "678-901-2345" },
  { id: "Y5Z6A7B8", name: "Gynecology", head: "Dr. Grace Wilson", location: "Building G, Floor 3", contactNumber: "789-012-3456" },
];


export default function Department() {
  const [departments, setDepartments] = useState(sampleDepartments);
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    head: "",
  });

  const handleAddDepartment = () => {
    if (
      newDepartment.name.trim() &&
      newDepartment.head.trim()
    ) {
      setDepartments([
        ...departments,
        {
          id: generateAlphanumericId(),
          name: newDepartment.name,
          head: newDepartment.head,
        },
      ]);
      setNewDepartment({ name: "", head: "" });
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
            <h2 className="text-lg font-semibold">Department List</h2>
            <AdminTable data={departments} />
          </div>
        </TabsContent>
        <TabsContent value="add">
          <div>
            <h2 className="text-lg font-semibold">Add Department</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Department Name"
                value={newDepartment.name}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, name: e.target.value })
                }
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Department Head"
                value={newDepartment.head}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, head: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <Button onClick={handleAddDepartment} className="btn">
              Add Department
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
