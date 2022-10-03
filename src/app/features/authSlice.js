import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ formValue, navigate, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.signIn(formValue);
//       toast.success("Login Successfully");
//       navigate("/");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      if (localStorage.getItem("token")) {
        state.user = jwt_decode(localStorage.getItem("token"));
      } else {
        state.user = null;
      }
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  //   extraReducers: {
  //     [login.pending]: (state, action) => {
  //       state.loading = true;
  //     },
  //     [login.fulfilled]: (state, action) => {
  //       state.loading = false;
  //       localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
  //       state.user = action.payload;
  //     },
  //     [login.rejected]: (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload.message;
  //     },
  //   },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
