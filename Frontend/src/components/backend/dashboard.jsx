import React from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className='dashboard my-5 py-5'>
        <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card shadow border-0'>
                <div className='card-body'>
                    <h4>Sidebar</h4>

                </div>

            </div>
            {/* Sidebar */}

          </div>

          <div className='col-md-9 dashboard'>
            {/* Dashboard content */}
            <div className='card shadow border-0'>
              <div className='card-body d-flex justify-content-center align-items-center'>
                <h4>Welcome to admin conssole</h4>
              </div> 
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;