import { toast } from 'react-toastify'

export function successToast(message: string) {
  toast.success(message, {
    theme: 'dark',
    pauseOnHover: true,
  })
}

export function generalSuccess() {
  toast.success('Operation completed successfully!', {
    theme: 'dark',
    pauseOnHover: true,
  })
}
