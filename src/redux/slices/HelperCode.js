


const educationHistory = [
    {
    beginDate: '2005-09-01',
    completionDate: '2009-05-15',
    degree: 'Bachelor of Science in Biology',
    institution: 'University of California, Los Angeles',
    },
    {
      beginDate: '07-28-2009',
      completionDate: '08-12-2013',
      degree: 'Master in Surgery',
      institution: 'New Apollo Hospital, New York'
    }
  ]
  
  
  const experienceHistory = [
    {
      startDate: '2005-09-01',
      endDate: '2009-05-15',
      position: 'Junior Biologist',
      company: 'Greenfield Environmental Research Institute, Los Angeles, CA',
    },
    {
      startDate: '2009-07-28',
      endDate: '2013-08-12',
      position: 'Surgical Resident',
      company: 'New Apollo Hospital, New York, NY',
    }
  ]


  const availableTimeSolts = [
    {
        dayOfWeek : "Sonday",
        startingTime: "09:00AM",
        endingTime: "02:30PM"
    },
    {
        dayOfWeek : "Tuesday",
        startingTime: "04:00PM",
        endingTime: "09:30PM"
    },
    {
        dayOfWeek : "Friday",
        startingTime: "06:00PM",
        endingTime: "09:30PM"
    },
]





// http://localhost:5173/api/auth/${user.role}/${user._id}/verify/${verifiedToken.token}`

// Visulation for state variable 
state = {
    places: { // stateKey: "places"
        loading: false,  // Managed by state[stateKey].loading
        placeError: '',  // Managed by state[stateKey].placeError
        places: []       // Managed by the logic in the fulfilled/rejected case
    },
    placeRemoving: { // stateKey: "placeRemoving"
        loading: false,
        placeError: ''
    },
    placeReviewing: { // stateKey: "placeReviewing"
        loading: false,
        placeError: ''
    }
};


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
