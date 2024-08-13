import Image from "next/image"

import Button from "@/components/button/button"

export default function Page() {
    return <>
        <Image src="img/next.svg" width={50} height={50} alt="Picture of the author"/>
        <h1>Hello, Next.js!</h1>
        <Button/>
    </>    
}