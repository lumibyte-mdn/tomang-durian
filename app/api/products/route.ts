import { client } from "@/sanity/client"
import { SanityDocument } from "next-sanity"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const PRODUCTS_QUERY = `*[_type == "product"]{ productName, price, productDescriptionEn, productDescriptionIdn }`

    const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY)

    return NextResponse.json({ products }, { status: 200 })
}