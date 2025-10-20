import axios from 'axios';

interface IResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

interface IRequestOptions {
  url: string;
  data: any;
}

export function request<T>(options: IRequestOptions): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    axios
      .post(options.url, options.data,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response: IResponse) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}