import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.friendChat;

const friendChatSelectors = createSelector(selectState, (state) => state);

export default friendChatSelectors;
