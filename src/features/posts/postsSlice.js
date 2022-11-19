import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  { id: '1', 
  title: 'Learning Redux Toolkit', 
  content: 'Ive heard good things',
  date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  { id: '2', 
  title: 'Learning slices', 
  content: 'The more I say slices the more I want pizza',
  date: sub(new Date(), { minutes: 5 }).toISOString()
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      //prepare callback, gets the post format standardized
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId
          }
        }
      }
    }
    // payload is the form data we will dispatch
    // can only use state.push within the create slice
    // everywhere else you would have to use [...state, new state]
  }
});

export const selectAllPosts = (state) => state.posts;
// if the state changes we won't have to change the state in all the components, just in the slice
// select all posts has the updated state

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;