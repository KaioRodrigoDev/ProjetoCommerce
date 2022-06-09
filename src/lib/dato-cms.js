const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = process.env.DATOCMS_READONLY

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
  }
}
  `)

  return data.allCamisas
}

export default { getAllProducts }
