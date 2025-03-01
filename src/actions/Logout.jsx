import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteItem } from '../Helpers';

export const logoutAction = () => {
  deleteItem({
    key: 'userName',
  });
  toast.success("You've deleted your account!");
  return redirect('/');
};
