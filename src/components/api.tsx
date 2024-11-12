// src/api.ts

const fetchData = async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  export const submitProduct = async (data: { name: string; description: string; price: number | '' }) => {
    return fetchData('https://example.com/api/submit', data);
  };
  
  export const registerUser = async (data: { name: string; phoneNumber: string; email: string; password: string  }) => {
    return fetchData('https://example.com/api/register', data);
  };
  
  export const submitCategory = async (data: { name: string }) => {
    return fetchData('https://example.com/api/category', data);
  };

  export const loginAdmin = async (data: { email: string; password: string }) => {
    return fetchData('https://example.com/api/category', data);
  };

  export const loginUser = async (data: { email: string; password: string }) => {
    return fetchData('https://example.com/api/category', data);
  };