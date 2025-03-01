import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';
import { fetchData } from '../Helpers';

export function dashboardLoader() {
  const userName = fetchData('userName');
  const budgets = fetchData('budgets');
  return { userName, budgets };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem('userName', formData.userName);
    toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error('There was a problem creating your account.');
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
