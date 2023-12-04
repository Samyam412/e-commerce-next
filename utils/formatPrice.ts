import { INTERNALS } from "next/dist/server/web/spec-extension/request"

export const formatPrice = (amount: number)=>{
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD'
    }).format(amount)
}