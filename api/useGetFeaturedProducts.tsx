import { Product } from "@/types/product"
import { useEffect, useState } from "react"



export function useGetFeaturedProducts () {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
  const [results, setResults] = useState<Product>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    useEffect(() => {
      (async() => {
        try {
          const res = await fetch(url)
          const json = await res.json()
          setResults(json.data)
          setLoading(false)
        } catch(error: any) {
          setError(error)
          setLoading(false)
        }
      })()
    }, [url])

    return {
      loading,
      results,
      error
    }
}

