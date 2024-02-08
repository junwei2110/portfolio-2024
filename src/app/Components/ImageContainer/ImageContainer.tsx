import Image from "next/image"


export const ImageContainer = ({ url, alt }: {url: string; alt: string;}) => {

    return (
            <Image
            src={url}
            alt={alt}
            fill={true}
            style={{ objectFit: "contain" }}
            />
    )
}