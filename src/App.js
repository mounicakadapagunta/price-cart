import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

  render() {

    return (

      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {/* Free Tier */}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                  <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Single User</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>5GB Storage</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Unlimited Public Projects</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Community Access</li>
                    <li class="text-muted"><i class="fa fa-times mr-2"></i> Unlimited
                      Private Projects</li>
                    <li class="text-muted"><i class="fa fa-times mr-2"></i> Dedicated
                      Phone Support</li>
                    <li class="text-muted"><i class="fa fa-times mr-2"></i> Free Subdomain
                    </li>
                    <li class="text-muted"><i class="fa fa-times mr-2"></i> Monthly Status
                      Reports</li>
                  </ul>
                  <div class="d-grid">
                    <a href=" " class="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Plus Tier */}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                  <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i><strong>5 Users</strong></li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>50GB Storage</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Unlimited Public Projects</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Community Access</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Unlimited Private Projects</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Dedicated Phone Support</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Free Subdomain</li>
                    <li class="text-muted"><i class="fa fa-times mr-2"></i>Monthly Status
                      Reports</li>
                  </ul>
                  <div class="d-grid">
                    <a href=" " class="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
            {/* pro */}
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i><strong>Unlimited Users</strong>
                    </li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>150GB Storage</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Unlimited Public Projects</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Community Access</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Unlimited Private Projects</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Dedicated Phone Support</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i><strong>Unlimited</strong> Free
                      Subdomains</li>
                    <li class="mb-3"><i class="fa fa-check mr-2 text-grey"></i>Monthly Status Reports</li>
                  </ul>
                  <div class="d-grid">
                    <a href=" " class="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  };
}

export default Home;