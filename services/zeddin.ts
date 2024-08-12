import axios from 'axios'

import { IZeddinData } from '@/common/types'

export async function getZeddinData(): Promise<IZeddinData> {
  const URL = process.env.ZEDDIN_DATA
  try {
    const response = await axios.get(String(URL))
    if (response?.status !== 200) return {} as IZeddinData
    return response.data
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
    return {} as IZeddinData
  }
}
