import React from "react";

const Login = () => {
  return (
    <>
      <div id="preloader"></div>
      <div class="login-area area-padding fix">
        <div class="login-overlay"></div>
        <div class="container">
          <div class="row justify-content-center text-center ">
            <div class="col-xl-6 col-lg-6 col-md-8">
              <div class="login-form">
                <h4 class="login-title text-center">LOGIN</h4>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Please Enter Referal ID here"
                  required
                  data-error="Please enter your name"
                />
                <input type="checkbox" value="" />
                Remember me
                <a class="text-muted" href="#">
                  Forgot password?
                </a>
              </div>
              <button type="submit" id="submit" class="slide-btn login-btn">
                Login
              </button>
              <div id="msgSubmit" class="h3 text-center hidden"></div>
              <div class="clearfix"></div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>

      <script src="js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/jquery.meanmenu.js"></script>
      <script src="js/magnific.min.html"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/wow.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </>
  );
};

export default Login;
