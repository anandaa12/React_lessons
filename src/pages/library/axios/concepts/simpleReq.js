import axios from "axios";

const baseUrl = "https://6550c03a7d203ab6626e1bc5.mockapi.io/";

export default function userApi() {



  // Passing configuration object to axios
  axios({
    method: "get",
    url: `${baseUrl}/users`,
  }).then((response) => {
    console.log(response.data);
  });

  axios.get(`${baseUrl}/users/1`).then((response) => {
    console.log(response.data);
  });


  const fetchUser = async () => {
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}/users/`
    }
    const response = await axios(configurationObject)
    console.log(response.data)
  }

  // Invoking get method to perform a GET request
  const fetchUserData = async () => {
    const url = `${baseUrl}/api/users/1`;
    const response = await axios.get(url);
    console.log(response.data);
  };


  return <></>;
}
