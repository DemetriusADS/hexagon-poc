import axios from 'axios'
import { GetDTO, PostDTO } from '../../hexagon/dtos';
import { HttpPort } from '../../hexagon/ports/driven';

export class AxiosAdapter implements HttpPort{
  async post({data, url}: PostDTO<any>): Promise<any> {
      return await axios.post(url, data)
  }

  async get({url}: GetDTO): Promise<any> {
      return await axios.get(url)
  }
}
