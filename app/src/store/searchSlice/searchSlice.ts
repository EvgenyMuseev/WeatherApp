import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchCityWeather = createAsyncThunk(
  "search/fetchCityWeather",
  async (cityValue: string, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Город не найден");
        } else {
          throw new Error("Server Error!");
        }
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: (error as Error).message });
    }
  }
);

export interface SeatchState {
  searchValue: string;
  cityWeatherInfo: any;
  status: string | null;
  statusText: string | null;
  error: { message: string } | null;
}

const initialState: SeatchState = {
  searchValue: "",
  cityWeatherInfo: {},
  status: null,
  statusText: "",
  error: null
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        state.status = "resolved";
        state.statusText = "Город найден"
        state.cityWeatherInfo = action.payload;
      })
      .addCase(fetchCityWeather.rejected, (state, action: any) => {
        state.status = "error";
        state.error = action.payload as { message: string };
        if (action.payload?.message === "Город не найден") {
          state.statusText = "Город не найден";
        }
      });
  },
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;
