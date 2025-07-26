import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const filmInfo = [
  {
    title: "The Silent Echo",
    Year: "2018",

    Role: "Lead Actor",
  },
  {
    title: "Shadow of Deceit",
    Year: "2020",

    Role: "Lead Actor",
  },
  {
    title: "Laughing Matters",
    Year: "2022",

    Role: "Supporting Actor",
  },
  {
    title: "Whispers in the Wind",
    Year: "2023",

    Role: "Director",
  },
  {
    title: "Echos of the Past",
    Year: "2024",

    Role: "actor, Director",
  },
  {
    title: "Journey to the Unknown",
    Year: "2025",

    Role: "Actor",
  },
];

export function FilmographyTable() {
  return (
    <Table className="w-4/5 text-white ">
     
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filmInfo.map((title) => (
          <TableRow key={title.title}>
            <TableCell className="font-medium">{title.title}</TableCell>
            <TableCell>{title.Year}</TableCell>
            <TableCell>{title.Role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
