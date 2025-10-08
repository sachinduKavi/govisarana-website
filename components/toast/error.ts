import { toast } from 'react-toastify'

export function errorToast(message: string) {
  toast.error(message, {
    theme: 'dark',
    pauseOnHover: true,
  })
}
export function generalError() {
  toast.error('An error occurred. Please try again.', {
    theme: 'dark',
    pauseOnHover: true,
  })
}

export function connecctionError() {
  toast.error(
    'Connection error. Please check your internet connection and try again.',
    {
      theme: 'dark',
      pauseOnHover: true,
    }
  )
}
