import axios from 'axios'

export async function getSelectCard() {
  const res = await axios.get('/data/선택카드데이터1.json')
  return res.data
}
