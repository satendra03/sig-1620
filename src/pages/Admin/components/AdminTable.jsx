import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function AdminTable({ data }) {
  const headings = Object.keys(data[0]);
//   console.log(data);
//   console.log(headings);
//   console.log(data[0][headings[0]]);

  return (
    //   <Table className="border border-black w-full p-3">
    //     <TableCaption>A list of your recent patients.</TableCaption>
    //     <TableHeader>
    //       <TableRow>
    //         {headings.map((head,idx)=>{
    //             return (
    //                 <TableHead key={idx}>{head}</TableHead>
    //             )
    //         })}
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {data.map((user,idx) => (
    //         <TableRow key={idx}>
    //           <TableCell>{data[idx][headings[idx]]}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //     {/* <TableFooter>
    //       <TableRow>
    //         <TableCell colSpan={3}>Total</TableCell>
    //         <TableCell className="text-right">$2,500.00</TableCell>
    //       </TableRow>
    //     </TableFooter> */}
    //   </Table>
    <Table className="border border-black w-full p-3">
      <TableCaption>A list of your recent entries.</TableCaption>
      <TableHeader>
        <TableRow>
          {headings.map((head, idx) => (
            <TableHead key={idx}>
              {head.charAt(0).toUpperCase() + head.slice(1)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, rowIndex) => (
          <TableRow key={rowIndex}>
            {headings.map((head, colIndex) => (
              <TableCell key={colIndex}>{item[head]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
