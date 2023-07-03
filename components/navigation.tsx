import { getMenuItems } from "../lib/api"
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Navigation({allItems: {edges}}) {
    {console.log(edges)}
    return(
        <div className="">
            

        </div>
    )
}

export const getMenuPath: GetStaticPaths = async () => {
    const allMenuItems = await getMenuItems()

    return {
        paths: allMenuItems.edges.map(({node}) => `/posts/${node.slug}`) || [],
        fallback:true,
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const allItems = await getMenuItems()
  
    return {
      props: { allItems },
      revalidate: 10,
    }
  }