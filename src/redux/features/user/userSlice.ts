import { auth } from "@/lib/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface IUserState {
    user: {
        email: string | null;
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

interface ICredential {
    email: string;
    password: string;
}

const initialState: IUserState = {
    user: {
        email: null,
    },
    isLoading: false,
    isError: false,
    error: null
}

export const createUser = createAsyncThunk(
    "user/createUser",
    async ({ email, password }: ICredential) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);

        return data.user.email;
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true
        }).addCase(createUser.fulfilled, () => {

        }).addCase(createUser.rejected, () => {
            
        })
    }
});



export default userSlice.reducer;