import { toast } from 'react-toastify';
export const notify = (text:string) => toast.warn(`${text}`, {
    position: "top-left",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
