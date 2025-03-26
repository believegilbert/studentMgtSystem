import { FunctionComponent, useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import ThemeToggle from "../components/themeToggle";

const AllStudents: FunctionComponent = () => {
  //create a state to hold all students data

  interface Student {
    id: number;
    firstName: string;
    lastName: string;
    country: string;
    grade: number;
    age: number;
  }

  const [data, setData] = useState<Student[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [debounceText, setDebounceText] = useState<string>("");

  //get all students data from our API
  useEffect(() => {
    const getStudents = async () => {
      const res = await publicRequest.get("/");
      setData(res.data);
    };

    getStudents();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(inputText);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputText]);

  const filteredData = data.filter(
    (student) =>
      student.firstName.toLowerCase().includes(debounceText.toLowerCase()) ||
      student.lastName.toLowerCase().includes(debounceText.toLowerCase()) ||
      student.country.toLowerCase().includes(debounceText.toLowerCase()) ||
      `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(debounceText.toLowerCase()) ||
      student.grade.toString().includes(debounceText.toLowerCase()) ||
      student.age.toString().includes(debounceText.toLowerCase())
  );

  //function to delete a student
  const handleDelete = (id: string) => {
    publicRequest.delete(`/${id}`);
    window.location.reload();
    
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 150},
    { field: "country", headerName: "Country", width:125},
    { field: "firstName", headerName: "First name", width:150},
    { field: "lastName", headerName: "Last name", width:140 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width:100
       },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 110,
      valueGetter: (_, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    { field: "grade", headerName: "grade", width:110 },

    {
      field: "View Details",
      headerName: "view Details",
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div>
            <div className="flex justify-center">
              <Link to={`/students/${params.row._id}`}>
                <button className="relative group bg-[#714326] text-[white] cursor-pointer w-[80px] border-none p-[3px]">
                <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
    view
  </span>
  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    view Item?
  </span>

                </button>
              </Link>
            </div>
          </div>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit student",
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div>
            <div className="flex justify-center">
              <Link to={`/students/${params.row._id}/edit`}>
                <button className="relative group bg-[#26a526] text-white cursor-pointer w-[80px] border-none p-[3px] rounded-md transition-all duration-300">
                  <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Edit
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Edit Item?
                  </span>
                </button>
              </Link>
            </div>
          </div>
        );
      },
    },

    {
      field: "delete",
      headerName: "Delete Student",
      width: 170,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div>
            <div className="flex mt-[15px] justify-center">
              <FaTrash
                className="text-[#be1b1b]  cursor-pointer"
                onClick={() => {
                  console.log("delete");
                  handleDelete(params.row._id);
                }}
              />
            </div>
          </div>
        );
      },
    },
  ];

  //this was our static row for our data table
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, address: "Lagos", grade: "A"},
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, address: "Lagos", grade: "A"},
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, address: "Lagos", grade: "A"},
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, address: "Lagos", grade: "A"},
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 20, address: "Lagos", grade: "A"},
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 15, address: "Lagos", grade: "A" },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, address: "Lagos", grade: "A"},
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, address: "Lagos", grade: "A"},
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, address: "Lagos", grade: "A"},
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, address: "Lagos", grade: "A"},
  // ];

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <div className="min-h-screen mb-[1rem]">

        <ThemeToggle />
  
        
      <h1 className="text-[#714326] text-[3rem] text-center mt-[8%] mb-[4rem]">
        STUDENTS
      </h1>
      <div className="text-center">
        <input
          placeholder="Search @example: Believe Gilbert"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-[300px] sm:w-[500px] md:w-[600px] rounded-[1rem] bg-[#efefef] p-[10px] outline-none"
        />
      </div>
      <Link to="/students/add">
        <button className="hover:text-[1.1rem] hover:rounded-[1.2rem] text-white bg-[#714326] hover:bg-[#584031fd] p-[9px] px-[1.2rem] rounded-[5px] flex items-baseline cursor-pointer mt-[7%] mx-auto">
          <FaPlus className="mr-[10px] text-[14px]" />
          add student
        </button>
      </Link>

      <Paper sx={{ height: 590, width: "90%" }} className="mx-auto mt-[5%]">
        <DataGrid
          rows={filteredData}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default AllStudents;
