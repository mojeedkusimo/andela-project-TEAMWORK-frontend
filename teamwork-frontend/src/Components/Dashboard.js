
import getUser from '../helperFunctions/getUser';

let Dashboard = () => {
    let user = getUser();
    return (
    <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center">Dashboard</h1>
            <div className="text-primary">
                <p>Hello {user.firstname}! Welcome to the dashboard</p>
            </div>
        </div>
        <div className="col-4"></div>
    </div>
    );
}

export default Dashboard;