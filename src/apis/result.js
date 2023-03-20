import axios from 'axios'

export async function getResultData(key) {
  const res = await axios.get(`/data/${key}.json`)
  return res.data
}
