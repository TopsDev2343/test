import { showToast } from '@/store/modalSlice'
import { logout } from '@/store/authSlice'

export default function (error, dispatch) {

  console.error(error);
  if (error?.response?.status || error?.response?.data?.message) {
    if (error?.response?.status == 401) {
      return dispatch(logout())
    }
    else if (error?.response?.status >= 500) {
      dispatch(showToast('server error'))
    } else
      dispatch(showToast(error?.response?.data?.message))
  } else if (error.request) {
    dispatch(showToast('internet error'))
  } else {
    dispatch(showToast(error.message))
  }
}