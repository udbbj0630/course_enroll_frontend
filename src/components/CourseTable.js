import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function CourseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell># number</TableCell>
            <TableCell align="left">Course Name</TableCell>
            <TableCell align="left">Course Location</TableCell>
            <TableCell align="left">Course Content</TableCell>
            <TableCell align="left">Teacher Id</TableCell>
            <TableCell align="left">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((course, index) => (
            <TableRow
              key={course.courseName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{course.courseName}</TableCell>
              <TableCell align="left">{course.courseLocation}</TableCell>
              <TableCell align="left">{course.courseContent}</TableCell>
              <TableCell align="left">{course.teacherId}</TableCell>
              <TableCell align="left">
                <Button variant="contained"
                        color = {props.buttonColor}
                        onClick={() => props.handleButtonClick(course.courseName)}>{props.buttonLabel}</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
