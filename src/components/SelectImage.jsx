import { useState } from 'react'
import { storage } from '../config/firebase'
import { v4 as uuidv4 } from 'uuid'
import { Card, CardMedia, IconButton } from '@mui/material'

function SelectImage({ title = '', disabled = false, required = false, onChange = () => {} }) {
    const [image, setImage] = useState('')

    const handleChangePicture = e => {
        if (e.target.files[0]) {
            const file = e.target.files[0]
            const fileType = file.type.split('/')[1]
            const fileName = uuidv4() + '.' + fileType
            const uploadTask = storage.ref(`/${fileName}`).put(file)
            // eslint-disable-next-line no-console
            uploadTask.on('state_changed', console.log, console.error, () => {
                storage
                    .ref('/')
                    .child(fileName)
                    .getDownloadURL()
                    .then(url => {
                        setImage(url)
                        onChange(url)
                    })
            })
        }
    }

    function SelectImageComponent() {
        return (
            <Card style={{ maxWidth: '400px' }} variant='outlined'>
                <IconButton variant='contained' component='label' aria-label='Subir al servidor' disabled={disabled} required={required}>
                    <CardMedia component='img' height='100%' image={image} title={title} />
                    <input
                        type='file'
                        accept='image/x-png,image/gif,image/jpeg'
                        onChange={handleChangePicture}
                        disabled={disabled}
                        required={required}
                        hidden
                    />
                </IconButton>
            </Card>
        )
    }

    return [image, setImage, SelectImageComponent]
}

export default SelectImage
