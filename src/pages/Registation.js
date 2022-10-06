import React from 'react'

const Registation = () => {
  return (
      <>
    <div id="preloader"></div>
    <div class="login-area area-padding fix">
        <div class="login-overlay"></div>
        <div class="container">
            <div class="row justify-content-center text-center ">
                <div class="col-xl-6 col-lg-6 col-md-8">
                    <div class="login-form signup-form">
                        <h4 class="login-title text-center">REGISTER</h4>
                        <form id="contactForm" method="POST" action="https://rockstheme.com/rocks/Graphbit-live/contact.php" class="log-form">
                            <input type="text" id="name" class="form-control" placeholder="Username" required data-error="Please enter your name"/>
                            <input type="email" id="email" class="form-control" placeholder="Your Email" required data-error="Please enter your name"/>
                            <input type="password" id="msg_subject" class="form-control" placeholder="Password" required data-error="Please enter your message subject"/>
                            <input type="password" id="cmsg_subject" class="form-control" placeholder="Confirm Password" required data-error="Please enter your message subject"/>
                            <div class="check-group">
                                <div class="checkbox">
                                    <label><input type="checkbox" value=""/>Terms & Conditions</label>
                                </div>
                            </div>
                            <button type="submit" id="submit" class="slide-btn color-btn login-btn">Sign up</button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div> 
                            <div class="clearfix"></div>
                            <div class="clear"></div>
                            <div class="separetor text-center"><span>Or with Signup</span></div>
                            <div class="sign-icon">
                                <ul>
                                    <li><a href="#"><img src="img/about/midea1.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/about/midea9.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/about/midea6.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/about/midea7.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/about/midea8.png" alt=""/></a></li>
                                </ul>
                                <div class="acc-not">have an account?  <a href="login.html">Login</a></div>
                            </div>
                        </form> 
                    </div>
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
  )
};

export default Registation;