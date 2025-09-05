import Layout from '@/components/Layout'
import HomeV2 from '@/components/v2/HomeV2'
import {loadResources} from '@/data/resources.server'

export default async function HomePage() {
  const resources = await loadResources();
  return (
    <Layout>
      <HomeV2 resources={resources} />
    </Layout>
  )
}
