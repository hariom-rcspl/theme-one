"use client";

import { useState, useMemo } from "react";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";

export default function Users() {
  // Dummy data
  const usersData = [
    { id: 1, name: "Alina Rai", position: "Developer", age: 28 },
    { id: 2, name: "Dani ", position: "Designer", age: 24 },
    { id: 3, name: "Michael Smith", position: "Manager", age: 35 },
    { id: 4, name: "Emma Wilson", position: "QA Tester", age: 26 },
    { id: 5, name: "David Kim", position: "Developer", age: 30 },
    { id: 6, name: "Sophia Brown", position: "HR", age: 29 },
    { id: 7, name: "James Miller", position: "Intern", age: 21 },
    { id: 8, name: "Olivia Davis", position: "Marketing", age: 32 },
  ];

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // Filter by search
  const filteredData = useMemo(() => {
    return usersData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage, filteredData]);

  return (
    <div className="p-6 space-y-4 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold">Users</h1>

      {/* Top Controls */}
      <div className="flex items-center justify-between">
        {/* Search */}
        <Input
          placeholder="Search by name..."
          className="w-64"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Rows:</span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => {
              setRowsPerPage(Number(value));
              setPage(1);
            }}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell className="flex justify-end gap-3">
                  <Button variant="secondary" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="default" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash className="w-4 h-4 text-white" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-4">
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
