import { useState } from 'react'
import { storage } from '../config/firebase'
import { v4 as uuidv4 } from 'uuid'
import { Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material'

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
                <CardContent>
                    <CardMedia
                        style={{
                            height: 0,
                            paddingTop: '100%',
                            borderRadius: '4px',
                            border: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                        image={image}
                        title={title}
                    />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton variant='contained' component='label' aria-label='Subir al servidor' disabled={disabled} required={required}>
                        OK
                        <input
                            type='file'
                            accept='image/x-png,image/gif,image/jpeg'
                            disabled={disabled}
                            onChange={handleChangePicture}
                            required={required}
                            hidden
                        />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }

    return [image, setImage, SelectImageComponent]
}

export default SelectImage
