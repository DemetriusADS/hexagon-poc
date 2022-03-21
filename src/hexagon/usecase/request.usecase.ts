import { HttpPort } from '../ports/driven';

export class RequestUsecase {
  constructor(private httpAdapter: HttpPort) { }
  
  async execute() {
    const { data } = await this.httpAdapter.get({ url: 'www.google.com.br' })
    return data;
  }
}