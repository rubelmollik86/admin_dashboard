import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import fakeData from "./fakeData";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import image from "../Images/image.jpeg"



const SalesTable = () => {
  const [data, setData] = useState(fakeData);
  const [searchData, setSearchData] = useState(data);

  const handleSearch = (e, status) => {
    const searchValue = e.target.value.toLowerCase();
    console.log("searchValue", searchValue, status);
    let filterData;
    if (searchValue === "") {
      setSearchData(data);
      return;
    }

    if (status === "all") {
      filterData = data.filter((item) => {
        return (
          item.invoiceId.toLowerCase().includes(searchValue) ||
          item.customerName.toLowerCase().includes(searchValue) ||
          item.date.includes(searchValue) // Assuming date search is case-sensitive
        );
      });
    } else if (status === "customerName") {
      filterData = data.filter((item) => {
        return item.customerName.toLowerCase().includes(searchValue);
      });
    } else if (status === "invoiceId") {
      filterData = data.filter((item) => {
        return item.invoiceId.toLowerCase().includes(searchValue);
      });
    } else if (status === "startDate") {
      filterData = data.filter((item) => {
        return item.date.toLowerCase().includes(searchValue);
      });
    }

    setSearchData(filterData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "invoiceId", headerName: "Invoice Id", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "customerName", headerName: "Customer", width: 150 },
    {
      field: "payableAmount",
      headerName: "Payable Amount",
      type: "number",
      width: 150,
    },
    {
      field: "paidAmount",
      headerName: "Paid Amount",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
    },
    {
      field: "dueAMount",
      headerName: "Due",
      type: "number",
      width: 150,
    },
  ];

  return (
    <div>
      {/* search  */}
      <Box>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} sm={5}>
            <input
              style={{
                width: "100%",
                border: "1px solid #ADA7A7",
                outline: "none",
                height: "32px",
                borderRadius: "5px",
              }}
              onChange={(e) => handleSearch(e, "all")}
              placeholder="Search"
              type="text"
            />
          </Grid>

          <Grid item xs={12} sm={1}>
            <Box
              style={{
                display: "flex",
                justifyContent: "sapce-between",
                gap: "10px",
              }}
            >
              <NotificationsNoneIcon />
              <img style={{ width: "30px" }} src={image} alt="logo" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box py={5} >
        <Typography sx={{fontSize:"24px"}}>Sales Information</Typography>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <Typography style={{ fontSize: "16px" }} mb={0.5}>
              Customer Name
            </Typography>
            <input
              style={{
                width: "100%",
                border: "1px solid #ADA7A7",
                outline: "none",
                height: "32px",
                borderRadius: "5px",
              }}
              onChange={(e) => handleSearch(e, "customerName")}
              placeholder="Enter Customer Name"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography style={{ fontSize: "16px" }} mb={0.5}>
              Invoice Id
            </Typography>
            <input
              style={{
                width: "100%",
                border: "1px solid #ADA7A7",
                outline: "none",
                height: "32px",
                borderRadius: "5px",
              }}
              onChange={(e) => handleSearch(e, "invoiceId")}
              placeholder="Enter Invoice Id"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography style={{ fontSize: "16px" }} mb={0.5}>
              Start Date
            </Typography>
            <input
              style={{
                width: "100%",
                border: "1px solid #ADA7A7",
                outline: "none",
                height: "32px",
                borderRadius: "5px",
              }}
              onChange={(e) => handleSearch(e, "startDate")}
              placeholder="Start Date  "
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography style={{ fontSize: "16px" }} mb={0.5}>
              End Date
            </Typography>
            <input
              style={{
                width: "100%",
                border: "1px solid #ADA7A7",
                outline: "none",
                height: "32px",
                borderRadius: "5px",
              }}
              placeholder="End Date"
              type="text"
            />
          </Grid>
        </Grid>
      </Box>

      {/*  table */}

      <Box style={{ height: 400, width: "100%" }} mt={4}>
        <DataGrid
          rows={searchData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default SalesTable;
