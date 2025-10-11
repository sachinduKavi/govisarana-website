import domain from './config'

export const loadGalleryImagesRequest = () => {
  return domain.get('storage/load-gallery-images')
}

export const deleteGalleryImageRequest = (imageId: number) => {
  return domain.delete(`storage/delete-gallery-image/${imageId}`)
}
