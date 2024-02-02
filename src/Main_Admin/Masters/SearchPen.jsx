import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TableCell,
  Box
} from "@mui/material";
import axios from "axios";
import closebutton from "../../images/close-button.png"
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from 'react-router-dom';
import CardContent from "@mui/material/CardContent";
import swal from "sweetalert";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
// import Sidebar from "./Sidebar";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const SearchPen = () => {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata1, setStudentData] = useState({ students: [] });
  const [dataNotFound, setDataNotFound] = useState(false);
  const [enrollmentGenerated, setEnrollmentGenerated] = useState(false);

  const { admissionSession, courseType,  courseName, courseBranch  } = useParams();
 console.log(admissionSession, courseType,  courseName, courseBranch ,  "data from query")
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = 'https://sssutms.ac.in/apitest/admin/pendingstudentlist';
        
            const requestData = {
              admissionSession,
              courseType,
              courseName,
              courseBranch,
            
            };
        
            const response = await axios.post(url, requestData);
        
            const data = response.data;
         console.log(data , "data")
         if (!data.students || data.students.length === 0) {
            setDataNotFound(true);
          } else {
            setDataNotFound(false);
            setStudentData(data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setDataNotFound(true);
        }
    };

    // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
    fetchData();
  }, [admissionSession, courseType,   courseName, courseBranch]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // console.log(studentdata, "data of student from use state")
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const branchname = studentdata1[0]?.courseBranch
  const coursename = studentdata1[0]?.courseName
  const studentId = studentdata1[0]?._id
//   const collegename = studentdata1[0]?.assignedCollege
  // console.log(branchname, coursename, collegename, ' message from K4LI  ..............')

  const handleClick = async () => {
    // try {
    //   const response = await axios.post(`https://sssutms.ac.in/apitest/generate-enrollment2/`, {
    //     courseName,
    //     // assignedCollege,
    //     courseBranch,
    //     admissionSession,
    //     courseType,
    //   });
    //   // console.log(response.data.message);
    //   swal({
    //     title: "Success",
    //     text: "Enrollment Generated Successfully!",
    //     icon: "success",
    //     buttons: "OK",
    //   });
    //   // Set enrollmentGenerated to true and reset state values
    //   setEnrollmentGenerated(true);
    //   setStudentData([]);
    // } catch (error) {
    //   // console.log(error)
    // }

  }
console.log(studentdata1, "helllo world")
  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <>
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
          <CardContent>
          {dataNotFound ? (
            <div>
            <h2>Oops! No Student Available in this Course!!!!</h2>
          </div>
        ) : (
            <Paper sx={{ width: "100%", overflow: "auto" }}>
              <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          S.No.
                        </h1>
                      </TableCell>

                  
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Registration No
                        </h1>
                      </TableCell> 
                      




                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Candidate Name
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Father's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Branch
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Course Name
                        </h1>
                      </TableCell>
                       <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                        College Name
                        </h1>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentdata1 && studentdata1.students && studentdata1.students.map((student, index) => (
                      <TableRow key={index}>
                           
                        <TableCell align="center">{index + 1}</TableCell>
                      


                        <TableCell align="center">
                          {student.randomId}
                        </TableCell>
                        
                        <TableCell align="center">
                          {student.name}
                        </TableCell>
                        <TableCell align="center">{student.fathersname
                        }</TableCell>
                        <TableCell align="center">{student.courseBranch}</TableCell>
                        <TableCell align="center">
                          {student.courseName}
                        </TableCell>
                        <TableCell align="center">
                          {student.assignedCollege}
                        </TableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[2, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
        )
                      }
          </CardContent>
          <br></br>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default SearchPen;
