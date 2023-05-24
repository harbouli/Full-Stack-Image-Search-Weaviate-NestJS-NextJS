export type DataType = {
  fullName: string;
  email: string;
  description: string;
  subject: string;
};
export const sendEmailContact = async (data: DataType) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
