
import { FunctionComponent } from "react"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllStudents: FunctionComponent = () => {
const handleDelete = (id : string) => {

}

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 89 },
    { field: 'address', headerName: 'Address', width: 89 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'grade', headerName: 'grade', width: 130 },
   
    {
      field: "View Details",
      headerName: "view Details",
      width: 150,
      renderCell: (params:GridRenderCellParams) => {
        return (
          <div>
            <Link to={`/students/${params.row._id}`}>
              <button className="bg-[#714326] text-[white] cursor-pointer w-[70px] border-none p-[3px]">
                view
              </button>
            </Link>
          </div>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params:GridRenderCellParams) => {
        return (
          <div>
            <Link to={`/students/${params.row._id}/edit`}>
              <button className="bg-[#26a526] text-[white] cursor-pointer w-[70px] border-none p-[3px]">
                Edit
              </button>
            </Link>
          </div>
        );
      },
    },

    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div>
            <FaTrash
              className="text-[#be1b1b]  cursor-pointer"
              onClick={() => {
                console.log("delete")
                handleDelete(params.row._id)
              }}
            />
          </div>
        );
      },
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, address: "Lagos", grade: "A"},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, address: "Lagos", grade: "A"},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, address: "Lagos", grade: "A"},
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, address: "Lagos", grade: "A"},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 20, address: "Lagos", grade: "A"},
    { id: 6, lastName: 'Melisandre', firstName: null, age: 15, address: "Lagos", grade: "A" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, address: "Lagos", grade: "A"},
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, address: "Lagos", grade: "A"},
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, address: "Lagos", grade: "A"},
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, address: "Lagos", grade: "A"},
  ];
  
  const paginationModel = { page: 0, pageSize: 10 };
  
  return (
    <div className="min-h-screen">

      <h1 className="text-[#714326] text-[3rem] text-center mt-[10%]">STUDENTS</h1>
      <div className="text-center">      <input placeholder="Search @example: John Doe " className="w-[300px] border-[#efefef] rounded-[5px] p-[10px] outline-none"/>
      </div>
  

        <Paper sx={{ height: 590, width: '90%' }} className="mx-auto mt-[5%]">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
       
     
        sx={{ border: 0,
          
        }}
      />
    </Paper>
  
    </div>
  )
}

export default AllStudents
