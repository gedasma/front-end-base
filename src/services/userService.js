

export async function postRequest(apiUrl, requestData) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData)
      return (responseData);
    } catch (error) {
      console.error('Error making POST request:', error.message);
      return null;
    }
  }

export async function loginUser(loginCredentials) {
  console.log(loginCredentials)
  try {
    const response = await fetch('http://localhost:8888/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginCredentials),
    });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    const responseData = await response.json();
    return (responseData);
  } catch (error) {
    console.error('Error making POST request:', error.message);
    return null;
  }
}

export async function checkLoginStatus(authToken) {
  try {
    const response = await fetch('http://localhost:8888/api/v1/users/current', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    console.log(response)
    if (response.ok) {
      console.log(response)
      const data = await response.json();
      console.log('Data:', data);
      return data;
    } else {
      console.error('Error:', response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

export async function registerUser(regData) {
  console.log("register attempt")
  console.log(regData)
  try {
    const response = await fetch('http://localhost:8888/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(regData),
    });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    const responseData = await response.json();
    console.log(responseData)
    return (responseData);
  } catch (error) {
    console.error('Error making POST request:', error.message);
    return null;
  }
}