import Link from 'next/link'
import Calculator from '../components/calculator/Calculator'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Calculator/>
    </p>
  </Layout>
)

export default IndexPage
