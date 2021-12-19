import React, { FC } from 'react'

interface Props {
    img: string
    position: string
    width?: number
    boxRef: React.LegacyRef<HTMLImageElement>
}

const Techimg: FC<Props> = ({ img, position, width, boxRef }) => {
    return (
        <img
            src={img}
            alt="aboutshahzain-tech-imgs"
            title="aboutshahzain-tech-imgs"
            className={`absolute blur-sm ${position}`}
            ref={boxRef}
            width={width ? width : 90}
        />
    )
}

export default Techimg
