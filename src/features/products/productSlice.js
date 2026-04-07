import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getProducts, getProductById } from "../../services/productApi";

// ✅ Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      return await getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ✅ Fetch single product
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, thunkAPI) => {
    try {
      return await getProductById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    singleProduct: null,
    status: "idle",
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // All products
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Single product
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      });
  },
});

export default productSlice.reducer;
