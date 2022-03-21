import { AxiosAdapter } from '../../adpters/axios/axios.adapter';

const makeAxiosAdapterFactory = () => new AxiosAdapter()

export { makeAxiosAdapterFactory }