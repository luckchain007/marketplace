import uploadFile from '@/modules/ipfs/nft.storage'
import { Upload } from 'antd'
import { isNil } from 'ramda'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

type UploadProps = {
  onChange?: (uploads: any) => any
  className?: string
  disabled?: boolean
  value?: any
  children?: React.ReactElement | boolean
  dragger?: boolean
}

export default function FileUpload({
  children,
  value,
  onChange,
  dragger = false,
}: UploadProps) {
  const handleInputChange = async (upload: any) => {
    const file = upload.file

    if (isNil(file)) {
      return
    }

    // uploadFile(file)
    //   .then((res) => {
    //     upload.onSuccess(res, file)
    //   })
    //   .catch((e) => {
    //     console.error(e)
    //     upload.onError(e)
    //     toast.error(
    //       <>{e instanceof Error ? e.message : 'Upload to Ipfs failed.'}</>
    //     )
    //   })
  }

  const Component = dragger ? Upload.Dragger : Upload

  return (
    <Component
      customRequest={handleInputChange}
      maxCount={1}
      onChange={({ fileList }: any) => {
        if (isNil(onChange)) {
          return
        }

        onChange(fileList)
      }}
      fileList={value}
    >
      {children}
    </Component>
  )
}
