import axios, { AxiosInstance, AxiosResponse } from "axios"
import type { Project } from "../types";

const http : AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1'
})

export async function getProjects(): Promise<Project[]> {
  const response: AxiosResponse<Project[]> = await http.get('/projects');
  return response.data;
}