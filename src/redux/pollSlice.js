import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 0,
    selectedOptions: {},
};

const pollSlice = createSlice({
    name: 'poll',
    initialState,
    reducers: {
        // Increment step
        nextStep(state) {
            if (state.currentStep < Object.keys(state.selectedOptions).length) {
            state.currentStep += 1;
            }
        },  
        prevStep(state) {
            if (state.currentStep > 0) state.currentStep -= 1;
        },
        selectOption(state, action) {
            const { stepIndex, optionId } = action.payload;
            state.selectedOptions[stepIndex] = optionId;
        },
        resetPoll(state) {
            state.currentStep = 0;
            state.selectedOptions = {};
        },
        setStep(state, action) {
            state.currentStep = action.payload;
        },
    },
});

export const { nextStep, prevStep, selectOption, resetPoll, setStep } = pollSlice.actions;
export default pollSlice.reducer;

