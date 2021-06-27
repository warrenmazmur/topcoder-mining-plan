import { DataGrid } from '@material-ui/data-grid';

function DataTable(props) {
  const {onDataChange} = props

  const columns = [
    {field: 'name', headerName:'Name', width: 150},
    {field: 'value', headerName:'Value', width: 150},
    {field: 'timeToMine', headerName:'Time to Mine', width: 200},
  ]
  
  const rows = [
    { id: '1', name: "ore1", value: 10, timeToMine: 5 },
    { id: '2', name: "ore2", value: 12, timeToMine: 3 },
    { id: '3', name: "ore3", value: 14, timeToMine: 2 },
    { id: '4', name: "ore4", value: 16, timeToMine: 8 },
    { id: '5', name: "ore5", value: 18, timeToMine: 4 },
    { id: '6', name: "ore6", value: 20, timeToMine: 6 },
  ];

  const handleChange = (e) => {
    const selectedRowIDs = new Set(e.selectionModel)
    const selectedRowData = rows.filter((row) =>
      selectedRowIDs.has(row.id)
    )
    onDataChange(selectedRowData)
  }

  return (
    <div style={{height:550, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        onSelectionModelChange={handleChange}
      />
    </div>
  )
}

export default DataTable;