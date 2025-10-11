import { deleteGalleryImageRequest, loadGalleryImagesRequest } from '@/http/storage'
import Loading from '@/components/Loading'
import { GalleryImage } from '@/type/storage/gallery-image'
import { connecctionError, generalError, successToast } from '@/components/toast'
import { el, fi } from 'date-fns/locale'

export async function getImageDetails(): Promise<false | GalleryImage[]> {
  try {
    Loading.setLoading(true)
    const response = await loadGalleryImagesRequest()
    if (response.status === 200 && response.data.proceed) {
      return response.data.content as GalleryImage[]
    } else if (response.status !== 200) {
      connecctionError()
    } else {
      generalError()
      return false
    }
  } catch (e: any) {
    console.error('Error loading gallery images:', e)
  } finally {
    Loading.setLoading(false)
  }
  generalError()
  return false
}

export async function permanentDeleteImage(imageId: number): Promise<boolean> {
  try {
    Loading.setLoading(true)
    const response = await deleteGalleryImageRequest(imageId)
    if (response.status === 200 && response.data.proceed) {
      successToast('Image deleted successfully.')
      return true
    } else if (response.status !== 200) {
      connecctionError()
    } else generalError()
  } catch (e: any) {
    console.error('Error deleting gallery image:', e)
    generalError()
  } finally {
    Loading.setLoading(false)
  }

  return false
}
