import { toast } from 'react-toastify'

export function successToast(message: string) {
  toast.success(message)
}

export function generalSuccess() {
  toast.success('Operation completed successfully!')
}
