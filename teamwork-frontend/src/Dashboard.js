

let Dashboard = ({ firstname, lastname }) => {

    return (
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center">Dashboard</h1>
            <div className="text-primary">
                <p>Hello {firstname} {lastname}!, welcome to the dashboard</p>
            </div>
        </div>
        <div className="col-4"></div>
    </div>
    );
}

export default Dashboard;