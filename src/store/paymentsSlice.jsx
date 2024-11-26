import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const VITE_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const cashOut = createAsyncThunk(
  "payments/cashOut",
  async ({ amount, phoneNumber }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${VITE_BACKEND_BASE_URL}/withdrawals/cash-out`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ amount, phoneNumber }),
        }
      );

      if (!response.ok) {
        throw new Error("Cash out failed. Please try again.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const buyNow = createAsyncThunk(
  "payments/buyNow",
  async ({ quantity, productId }, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("token"); 

    if (!accessToken) {
      return rejectWithValue("User is not authenticated.");
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ quantity, productId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to initiate payment.");
      }

      const data = await response.json();
      if (data.statusCode === 200 && data.data.checkout_url) {
        window.location.href = data.data.checkout_url;
      } else {
        return rejectWithValue(data.message || "Error initiating payment.");
      }
    } catch (error) {
      return rejectWithValue(error.message || "An unexpected error occurred.");
    }
  }
);



const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    loading: false,
    successMessage: "",
    errorMessage: "",
  },
  reducers: {
    clearMessages: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(cashOut.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(cashOut.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Cash out successful!";
      })
      .addCase(cashOut.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage =
          action.payload || "An error occurred during cash out.";
      })

      .addCase(buyNow.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(buyNow.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Purchase successful!";
      })
      .addCase(buyNow.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage =
          action.payload || "An error occurred during purchase.";
      });
  },
});

export const { clearMessages } = paymentsSlice.actions;
export default paymentsSlice.reducer;
