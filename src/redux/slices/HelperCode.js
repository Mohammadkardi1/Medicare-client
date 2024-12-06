// Helper function to add async thunk cases
const addAsyncThunkCases = (builder, asyncThunk, stateKey) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state[stateKey].loading = true;
            state[stateKey].placeError = '';
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            state[stateKey].loading = false;
            state[stateKey].placeError = '';
            if (action.payload && action.payload.data) {
                state[stateKey].places = action.payload.data;
            }
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state[stateKey].loading = false;
            state[stateKey].placeError = action.error.message || 'Something went wrong';
            state[stateKey].places = [];
        });
};

const initialState = {
    places: [],
    loading: false,
    placeRemoving: false,
    placeReviewing: false,
    placeFavorite: false,
    placeError: '',
};

const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Add cases for each async thunk
        addAsyncThunkCases(builder, getAllPlaces, 'places');
        addAsyncThunkCases(builder, getPlace, 'places');
        addAsyncThunkCases(builder, getUserplaces, 'places');
        addAsyncThunkCases(builder, getPlacesBySearch, 'places');
        addAsyncThunkCases(builder, createPlace, 'places');
        addAsyncThunkCases(builder, removePlace, 'placeRemoving');
        addAsyncThunkCases(builder, setUnavailableDates, 'places');
        addAsyncThunkCases(builder, favoritePlace, 'placeFavorite');
        addAsyncThunkCases(builder, editPlace, 'places');
        addAsyncThunkCases(builder, getFavoritePlaces, 'places');
        addAsyncThunkCases(builder, reviewPlace, 'placeReviewing');
    }
});

export default placeSlice.reducer;
