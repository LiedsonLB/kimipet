import type { ReactElement } from 'react'
import Layout from '@/components/layout'
import type { NextPageWithLayout } from '@/pages/_app'
import CadasterLayout from '@/layouts/CadasterLayout'
 
const Page: NextPageWithLayout = () => {
  return (
    <CadasterLayout />
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page