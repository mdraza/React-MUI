import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";
import axios from "axios";

const Table1 = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const loadUser = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onChangePage = (event, nextPage) => {
      setPage(nextPage)
  }

  const onChangeRowsPerPage = (e, value) => {
    setRowsPerPage(e.target.value)
  }

  return (
    <Paper component={Box} width="80%" mt={4} mx="auto" elevation={4}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map((user) => (
              <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 8, 10, 15, 20, 25]}
          count={user.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  );
};

export default Table1;
