import axios from 'axios';

export const getContacts = async (_, thunkAPI) => {
  try {
    const res = await axios.get('/contacts');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const createContacts = async (data, thunkAPI) => {
  try {
    const res = await axios.post('/contacts', data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteContacts = async (id, thunkAPI) => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
