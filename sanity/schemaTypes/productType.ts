import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "productImage",
            type: "image"
        }),
        defineField({
            name: "productName",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "productDescriptionIdn",
            type: "text"
        }),
        defineField({
            name: "productDescriptionEn",
            type: "text"
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required()
        })
    ]
})