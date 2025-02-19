import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Http {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleError(error: any) {
    // Handle error appropriately
    console.error('API call error:', error);
    throw error;
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .get<T>(url, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .post<T>(url, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .put<T>(url, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .delete<T>(url, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }
}

const baseURL = 'https://api.themoviedb.org/3'; // Replace with your TMDB API base URL
const http = new Http(baseURL);

export default http;