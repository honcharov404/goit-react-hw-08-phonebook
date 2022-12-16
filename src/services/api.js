import axios from 'axios';

const BASE_URL = 'https://639891f3044fa481d6a29add.mockapi.io/contacts/';

export const getContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  return data;
};
