export interface Product {
    id: number
    name: string
    descriptions: string
    price: number
    availableSince: string
    isActive: boolean
    categoryId: number
    productImages: ProductImage[]
  }
  
  export interface ProductImage {
    id: number
    base64Image: string
    mime: string
    imageName: string
    productId: number
    isActive: boolean
  }