import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:8080/' });


export const getTeams = async () => {

  const data = await instance.get("team");
  return data.data;
}

export const getTeamById = async(id) => {

  const data = await instance.get("team/" + id);
  console.log("TeamById",data)
  return data.data;

}

export const getPlayerList = async(id) => {
  console.log("iiiiiiiiiiiiii",id)
  console.log("hola")
  const data = await instance.get("players/" + id);
  console.log("Players",data);
  return data.data; 

}


