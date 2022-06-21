import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

// Get user from localStorage

// Login user
export const addproduct = createAsyncThunk(
  "product/addproduct",
  async (productData, thunkAPI) => {
    try {
      return await productService.addproduct(productData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
