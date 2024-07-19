import type { ReactElement } from 'react'
import Layout from '@/components/layout'
import type { NextPageWithLayout } from '@/pages/_app'
import LoginLayout from '@/layouts/LoginLayout'
 
const Page: NextPageWithLayout = () => {
  return (
    <LoginLayout />
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