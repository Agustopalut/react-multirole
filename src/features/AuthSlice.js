import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkApi) => {
    // thunkApi untuk meeyimpan error nya,user sebagai object inputan user
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data.msg);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkApi) => {
  try {
    const response = await axios.get("http://localhost:5000/me");
    return response.data;
  } catch (error) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
});

export const logout = createAsyncThunk("user/logout", async () => {
  await axios.delete("http://localhost:5000/logout");
  // logout takperlu extraReducers
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
    //method /acttion ini berfungsi untuk mereset semua initialState menjadil nilai awal
  },
  extraReducers: (builder) => {
    // action adalah hasil dari return
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      // jika sedang pending
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { reset } = authSlice.actions; //mengambil method nya
export default authSlice.reducer;
