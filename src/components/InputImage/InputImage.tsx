import Utils from '@/Helpers/utils'
import React from 'react'

interface InputImageProps {
    imgId: string,
    inputId: string
}

const InputImage = ({ imgId, inputId }: InputImageProps) => {
    return (
        <input onClick={() => Utils.addImage(imgId, inputId)} accept="image/*" id={inputId} type={'file'} style={{ display: 'none', position: 'absolute' }} />
    )
}

export default InputImage