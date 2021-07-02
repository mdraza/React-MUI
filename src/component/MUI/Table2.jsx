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

const Table2 = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const loadUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onChangePage = (e, nextPage) =>{
      setPage(nextPage)
  }

  const onChangeRowsPerPage = (e) => {
      setRowsPerPage(e.target.value)
  }

  return (
    <Paper component={Box} width="90%" mx="auto" mt={2} elevation={3}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
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
          rowsPerPageOptions={[3, 6, 9, 10]}
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

export default Table2;
