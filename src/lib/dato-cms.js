const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = '24a12381766a1af2cec1b80d9b6d8c'

async function AXIOSCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch CMS API')
  }

  return json.data
}

export async function getAllProducts() {
  const data = await AXIOSCmsAPI(`
{
  allCamisas {
    id
    nome
    preco
    imagem {
      url
    }
  }
}
  `)

  return data.allCamisas
}

export default { getAllProducts }
