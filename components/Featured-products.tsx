
import React from 'react'

import { ResponseType } from '@/types/response'
import { useGetFeaturedProducts } from '@/api/useGetFeaturedProducts'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Data, Product } from '@/types/product'
import { Card, CardContent } from './ui/card'
import SkeletonSchema from './SkeletonSchema'
import { Expand, ShoppingCart } from 'lucide-react'
import IconButton from './ui/icon-button'
import { useRouter } from 'next/navigation'


const FeaturedProducts = () => {

  const { results, loading }: ResponseType = useGetFeaturedProducts()
  const router = useRouter()

  console.log("results ==>", results)

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
           {
              loading && (
                <SkeletonSchema grid={3}/>
              )
           }
           {
            results && (
              results.map((product: Data) => {
                console.log("product==>", product)

                /* const data = product.data[0]; */

                const { id, documentId , images, slug, productName, taste, origin } = product 

                const imageUrl = images && images.length > 0 ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}` : '';
                
                /* const produc = product.data[0] */

                /* console.log("Aaaaaaaaaaaa ==>", produc) */
                /* console.log("data ==>", results) */
                /* const { slug, images, productName, taste } = datas */

                return (
                  <>
                   {
                    <CarouselItem key={documentId} className='md:basis-1/2 lg:basis-1/3 group'>
                      <div className='p-1'>
                      <Card className='py-4 border border-gray-300 shadow-none'>
                        <CardContent className='relative flex items-center justify-center px-6 py-2'>
                            {imageUrl && (
                              <img
                                src={imageUrl}
                                alt="Image featured"
                              />
                            )}
                            <div className='absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5'>
                                <div className='flex  justify-center gap-x-6'>
                                    <IconButton onClick={() => router.push(`product/${slug}}`)} icon={<Expand size={20}/>}/>
                                    <IconButton onClick={() => console.log("add item")} icon={<ShoppingCart />}/>
                                </div>
                            </div>
                        </CardContent>
                        <div className='flex justify-between gap-4 px-8'>
                          <h3 className='text-lg font-bold'>{productName}</h3>
                          <div className='flex items-center justify-between gap-3'>
                            <p className='px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit'>{taste}</p>
                            <p className='px-2 py-1 text-white bg-yellow-800 rounded-full dark:bg-white dark:text-black w-fit'>{origin}</p>
                          </div>
                        </div>
                      </Card>
                      </div>
                   </CarouselItem> 
                  }
                  </>
                ) 
              })
            )
           }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className='hidden sm:flex'/>
      </Carousel>
    </div>
  )
}

export default FeaturedProducts
