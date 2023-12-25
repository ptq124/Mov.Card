import axios from 'axios'

export async function getResultData(key: string | undefined) {
  const res = await axios.get(`/data/${key}.json`)
  return res.data
}
