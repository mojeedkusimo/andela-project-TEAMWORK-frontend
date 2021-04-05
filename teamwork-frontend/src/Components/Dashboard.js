
import getUser from '../helperFunctions/getUser';

export const Dashboard = () => {
    let user = getUser();
    return (
    <div className="row mt-5 text-center">
        <div className="col"></div>
            <div className="col-8 shadow-lg mx-3 my-5 py-5">
                <h1 className="pt-3 action-header">Dashboard</h1>
                <div className="text-primary">
                    Hello {user.firstname}! Welcome to your dashboard
                </div>
            </div>
        <div className="col"></div>
    </div>
    );
}
