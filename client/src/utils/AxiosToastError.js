import toast from "react-hot-toast"

const AxiosToastError = (error,id)=>{
    toast.error(
        error?.response?.data?.message,id
    )
}

export default AxiosToastError