'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LanguageButton () {
    const router = useRouter()

    const [lang, setLang] = useState<string>('ID')

    const handleClick = (): void => {
        const l: string = lang == 'ID' ? 'EN' : 'ID'

        setLang(l)

        router.push(`/${l.toLowerCase()}`)
    }


    return (
        <button onClick={handleClick} className="bg-black text-white px-4 py-3 cursor-pointer">{lang}</button>
    )
}