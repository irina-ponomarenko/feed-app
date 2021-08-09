import React from "react";

const initialState = {
    user: "unknown user"
};

export default function userInfo  (state = initialState, action) {
    if (action.type === 'token') {
        return {
            ...state,
            token: action.payload.token
        }
    }

    return state;
};
