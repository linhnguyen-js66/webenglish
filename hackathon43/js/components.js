let components = {};

components.signUp = `
<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container" id="sign-up-container">
        <div class="card login-card">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <img src="./img/signup-img.jpg" alt="login" class="login-card-img">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <div class="brand-wrapper">
                            <a href="#!" id="home-page-container">
                                <img src="./img/logoefun.png" alt="logo" class="logo" style="margin-bottom:2%">
                            </a>
                        </div>
                        <p class="login-card-description">ĐĂNG KÝ TÀI KHOẢN</p>
                        <form action="#!" id="form-sign-up">
                            <div class="form-group" id="name-field">
                                <label for="name" class="sr-only">Name</label>
                                <input name="name" id="name" class="form-control" placeholder="Your name">
                            </div>
                            <div class="message-error" id="name-error"></div>
                            <div class="form-group">
                                <label for="email" class="sr-only">Email</label>
                                <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="message-error" id="email-error"></div>
                            <div class="form-group mb-4">
                                <label for="password" class="sr-only">Password</label>
                                <input type="password" name="password" id="password" class="form-control" placeholder="Mật khẩu">
                            </div>
                            <div class="message-error" id="password-error"></div>
                            <div class="form-group mb-4">
                                <label for="password" class="sr-only">Confirm Password</label>
                                <input type="password" name="passwordConfirmation" id="confirm_password" class="form-control" placeholder="Xác nhận mật khẩu">
                            </div>
                            <div class="message-error" id="password-confirmation-error"></div>
                            <button name="signUp" id="sign-up-btn" class="btn btn-block signup-btn mb-4" >Đăng ký</button>
                            <div class="message-error" id="sign-up-error"></div>
                            <div class="message-success" id="sign-up-success"></div>
                        </form>
                        <p class="login-card-footer-text">Bạn đã đăng kí tài khoản?<a href="#!" id="sign-in-link" class="text-reset" style="color: orange !important;"> Cùng 1412 học nào!</a></p>
                        <nav class="login-card-footer-nav">
                            <a href="#!">Terms of use.</a>
                            <br>
                            <a href="#!">Privacy policy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
`

components.signIn = `
<div class="container" id="sign-in-container" style="margin-top: 5%">
    <div class="card login-card">
        <div class="row no-gutters">
            <div class="col-md-5">
                <img src="./img/login-img.jpg" alt="login" class="login-card-img">
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <a href="#" class="brand-wrapper" id="home--page--link">
                        <img src="./img/logoefun.png" alt="logo" class="logo" style="margin-bottom:2%">
                    </a>
                    <p class="login-card-description">ĐĂNG NHẬP TÀI KHOẢN</p>
                    <form action="#!" id="form-sign-in">
                        <div class="form-group">
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="message-error" id="email-error"></div>
                        <div class="form-group mb-4">
                            <label for="password" class="sr-only">Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <div class="message-error" id="password-error"></div>
                        <button id="login-btn" class="btn btn-block login-btn mb-4">Đăng nhập</button>
                        <div class="message-error" id="sign-in-error"></div>
                    </form>
                    <a href="#!" class="forgot-password-link" id="forgot-password">Bạn quên mật khẩu?</a>
                    <p class="login-card-footer-text">Tạo tài khoản mới? <a href="#!" class="text-reset" style="color: orange !important;" id="sign--up"> Đi theo 1412 nào!</a></p>
                    <nav class="login-card-footer-nav">
                        <a href="#!">Terms of use.</a>
                        <a href="#!">Privacy policy</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
`
components.homePage = `
<div id="home-page-content">
    <!--Navbar -->
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
        <a class="navbar-brand" href="#"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-dark"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item">
                <a class="nav-link" href="#home" id="home-page-container"style="color: orange !important;">TRANG CHỦ</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#EFUN">1412-E <i class="fas fa-star" style="color:red !important;"></i></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#IDOLS">IDOLS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link blogs-link" href="#">BLOGS</a>
                </li>
            </ul>
            <button class="btn btn-link" id="sign-up-link" type="button">HỌC MIỄN PHÍ</button>
        </div>
    </nav>
    <!--/.Navbar -->

    <!-- header -->
    <!-- <div id="carousel-example-1z" class="carousel slide carousel-fade">

    <div class="carousel-inner" role="listbox"> -->

    <div class="container head-part" id="head-part">
    <div class="d-flex flex-row justify-content-between">
    <div class="p-2">
        <div class="carousel-part">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <!-- <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol> -->

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="./img/mentor.jpg" alt="Los Angeles" id="imgslide1">
            </div>

            <div class="item">
              <img src="./img/teamwork-1.jpg" alt="Chicago" id="imgslide2">
            </div>
          
            <div class="item">
              <img src="./img/teamwork-5.jpg" alt="New york" id="imgslide3">
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" id="left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next" id="right">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="p-2>
        <div class="enroll-course">
            <div class="description-part">
                <span class="title-description">1412-E HỆ THỐNG HỌC IELTS TRỰC TUYẾN</span>
                <br>
                <span class="detail-description">Tham gia học và luyện thi IELTS miễn phí để nhận quà</span>
                <br>
                <button class="enroll-btn effect"><span>ĐĂNG KÝ HỌC NGAY</span></button>
            </div>
        </div>
    </div>

    <div class="container" id="home">
        <section class="section pb-3 text-center">

        <!--Section heading-->
        <h1 class="section-heading h1 pt-4">Tại sao bạn nên học tại <b style="color: orange !important;">1412-E ?</b>
        </h1>
        <!--Section description-->
        <p class="section-description">1412-E đang xây dựng một cộng đồng học tiếng anh miễn phí. Không chỉ giúp cho
            những
            người đi làm, không có nhiều thời gian mà còn giúp cho những học sinh, sinh viên không
            có điều kiện được học tập và luyện thi IELTS tại các trung tâm chất lượng khác.</p>

        <div class="row">

            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4 reason-card">

            <!--Card-->
                <div class="card testimonial-card">

                    <!--Background color-->
                    <div class="card-up teal lighten-2">
                    </div>

                    <!--Avatar-->
                    <div class="avatar mx-auto white"><img src="./img/support.jpg" alt="avatar mx-auto white"
                        class="img-fluid">
                    </div>

                    <div class="card-body">
                    <!--Name-->
                    <h4 class="card-title mt-1">HỖ TRỢ 24/7</h4>
                    <hr>
                    <!--Quotation-->
                    <p> Luôn hỗ trợ người học
                        một cách nhanh chóng, dễ hiểu</p>
                    </div>

                </div>
            <!--Card-->

            </div>
            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4 reason-card">

                <!--Card-->
                <div class="card testimonial-card">

                    <!--Background color-->
                    <div class="card-up teal lighten-2">
                    </div>

                    <!--Avatar-->
                    <div class="avatar mx-auto white"><img src="./img/studyfree.jpg" alt="avatar mx-auto white"
                        class="img-fluid">
                    </div>

                    <div class="card-body">
                    <!--Name-->
                    <h4 class="card-title mt-1">HỌC MIỄN PHÍ</h4>
                    <hr>
                    <!--Quotation-->
                    <p>Học tập hay luyện thi
                        hoàn toàn miễn phí với
                        hàng nghìn đề ôn tập.</p>
                    </div>

                </div>
            <!--Card-->

            </div>
            <div class="col-lg-4 col-md-12 mb-4 reason-card">

                <!--Card-->
                <div class="card testimonial-card">

                    <!--Background color-->
                    <div class="card-up teal lighten-2">
                    </div>

                    <!--Avatar-->
                    <div class="avatar mx-auto white"><img src="./img/lesson.jpg" alt="avatar mx-auto white"
                        class="img-fluid">
                    </div>

                    <div class="card-body">
                    <!--Name-->
                    <h4 class="card-title mt-1">BÀI GIẢNG CHẤT LƯỢNG</h4>
                    <hr>
                    <!--Quotation-->
                    <p>Cung cấp các bài giảng
                        liên quan và các skills
                        quan trọng để làm
                        bài thi.</p>
                    </div>

                </div>
            <!--Card-->

        </div>
    </div>

    </section>
    <div class="container" id="IDOLS">
    <section class="section pb-3 text-center">

        <!--Section heading-->
        <h1 class="section-heading h1 pt-4">Gương mặt thương hiệu <b style="color: orange !important;">1412-E</b>
        </h1>
        <!--Section description-->
        <div class="row">
        <div class="col-md-12 col-6 mt-5 the-face">
            <img alt="Hà Linh" style="width:128px" class="rounded-circle" src="./img/linh.jpg">
            <br>
            <a class="pos mt-4" href="https://www.facebook.com/messages/t/linh.lun.397/">Linh Nguyễn</a>
            <br>
            <span>Founder</span>
        </div>
        <div class="col-md-4 col-6 mt-5 the-face">
            <img alt="Hoàng Văn Hòa" style="width:128px" class="rounded-circle" src="./img/quan.jpg">
            <br>
            <a class="pos mt-4" href="https://www.facebook.com/messages/t/hoangvanhoa056/">Hoàng Văn Hòa</a>
            <br>
            <span>Co-Founder</span>
        </div>
        <div class="col-md-4 col-6 mt-5 the-face">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/phuongpham.jpg">
            <h5 class="pos mt-4">Phương Phạm</h5>
            <span>Co-Founder</span>
        </div>
        <div class="col-md-4 col-6 mt-5 the-face">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/ly.jpg">
            <h5 class="pos mt-4">Nguyễn Phương Ly</h5>
            <span>Employee Experience</span>
        </div>
        </div>
        <div class="row">
        <div class="col-md-4 col-6 mt-5 the-face">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/tee.jpg">
            <h5 class="pos mt-4">Nguyễn Thanh Tuấn</h5>
            <span>Developer</span>
        </div>
        <div class="col-md-4 col-6 mt-5 the-face">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/tung.jpg">
            <h5 class="pos mt-4">Nguyễn Thanh Tùng</h5>
            <span>Leader Team</span>
        </div>
        <div class="col-md-4 col-6 mt-5 the-face">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/son.jpg">
            <h5 class="pos mt-4">Nguyễn Hoàng Sơn</h5>
            <span>IT Administrator</span>
        </div>
        </div>
    </section>
    </div>

    <section class="switchable switchable--switch feature-large mt-5" id="EFUN">
    <div class="container">
        <div class="row justify-content-center pb-5">
        <div class="col-md-8">
            <h1 class="text-center"><b style="color: orange !important;">1412-E</b> sở hữu những gì?</h1>
        </div>
        </div>
        <div class="row text-center">
        <div class="col-md-3 mb-5">
            <i class="fas fa-trophy" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="25" data-speed="1500">25</span>
            </h2>
            <p>Giấy chứng nhận đạt chuẩn</p>
        </div>
        <div class="col-md-3 mb-5">
            <i class="fas fa-handshake" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="35" data-speed="1500">35</span>
            </h2>
            <p>Đối tác</p>
        </div>
        <div class="col-md-3 mb-5">
            <i class="fab fa-readme" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="1000"
                data-speed="1500">1000</span>
            </h2>
            <p>Bài giảng chất lượng</p>
        </div>
        <div class="col-md-3 mb-5">
            <i class="fas fa-users" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="1500"
                data-speed="1500">1500</span>
            </h2>
            <p>Người truy cập</p>
        </div>
        </div>
    </div>
    </section>


    <!-- Footer -->
    <footer class="page-footer font-small special-color-dark pt-4">
    <div class="footer-copyright text-center py-3">
        <blockquote style="font-size:30px; font-style: italic; color:gray !important;">"Stay hungry, stay foolish."
        </blockquote>
        <p style="font-weight: bold;">Steve Job</p>
        <span>CEO Apple Inc</span>
    </div>
    <div class="container">
        <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
            <i class="fab fa-facebook-f"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
            <i class="fab fa-twitter"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
            <i class="fab fa-google-plus-g"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
            <i class="fab fa-linkedin-in"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
            <i class="fab fa-dribbble"> </i>
            </a>
        </li>
        </ul>
    </div>
    <div class="footer-copyright text-center py-3">
        <span class="type--fine-print">Made with &nbsp;&nbsp;<span
            style="font-size: 30px; vertical-align: middle;">⌨️</span>
        &nbsp; and &nbsp;
        <span style="font-size: 30px; vertical-align: middle;">🙌</span>
        </span>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/">EFUN ENGLISH</a>
    </div>
    </footer>
    <!-- Footer -->
</div>
`

components.efunHouse = `
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="#"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" id="efun-house">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
        </li>
          <li class="nav-item">
            <a class="nav-link study-page" href="#" id="study-page">LUYỆN TẬP</a>
          </li>
        <li class="nav-item">
          <a class="nav-link blog-page" href="#" id="blogs-page">BLOGS</a>
        </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part">
        <li class="user-infomation" id="user-information"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
        
        <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
      </div>
    </div>
  </nav>
  <!--/.Navbar -->
  <!-- header -->
  <section class="container " style="margin-top: 2%;">
  <div class="header d-flex flex-row justify-content-between">
    <span class="p-2"><img alt="runrun" src="./img/gif.gif"  width="120"></span>
    <span class="p-2 align-self-center"><button class="btn btn-test" id="doing-test"><span>LÀM BÀI TEST </span></button></span>
    <span class="p-2"><img alt="runrun" src="./img/flag.png" width="70"></span>
  </div>
  <div class="line-race"></div>
  </section>
  <!-- CHARTS -->
  <section class="container" style="margin-top: 2%;" id="EFUN">

    <h5 style="font-family:montserrat;">BẢNG XẾP HẠNG <i class="fas fa-chart-line" style="color: #0099ff !important"></i></h5>
     <div class="row pt-4">
        
         <div class="col-lg-4">
            <div class="card card-deflaut">
                <div class="card-header">
                    <div class="card-title" style="width:100%"><span class="text">Tốc độ học <i class="fas fa-chess-queen" style="color: yellow!important;"></i></span></div>
                </div>
                <div class="card-body">
                    <div class="acount-info">
                        
                                <div class="inner">
                                        Điểm tuần này 
                                        <div class="count-point" id="count-point" style="color: green!important;">0</div>
                                </div>
                                <div class="inner">
                                    Hạng tuần này
                                    <div class="count-point"> > 100</div>
                                </div>
                    </div>
                    <div class="acount-info">
                        
                        <div class="inner">
                                Tổng điểm 
                                <div class="count-point" id="sum-score" style="color: red!important;">0</div>
                        </div>
                        <div class="inner">
                            Xếp hạng
                            <div class="count-point" style="color: orange!important;"> > 100</div>
                        </div>
                     </div>
                </div>
            </div>
            <div class="card card-deflaut">
                <div class="card-header" style="background:lightgreen!important">
                    <span class="flag">
                        <img alt="bxh" src="./img/track.png" style="width:120%">
                      </span>
<<<<<<< HEAD
                    <div class="card-title" style="width:100%;margin-left:62px;"><span class="text">Lộ trình học </span></div>
=======
                    <div class="card-title" style="width:100%;margin-left:53px;"><span class="text" style="margin-left:20px">Lộ trình học </span></div>
>>>>>>> c0790f65b99f90e4008b58dc09c7f2cae1a8ea09
                </div>
                <div class="card-body">
                   <div class="d-flex flex-row justify-content-between">
                       <div class="p-2">
                            <img src="./img/speaking.jpg" alt="" width="50" class="img-icon">
                       </div>
                       <div class="p-2">
                            <p>
                            Tổng quan về bài thi nói kết hợp với thực hành ở kỹ năng Speaking
                           </p>
                       </div>
                   </div>
                   <div class="d-flex flex-row justify-content-between">
                    <div class="p-2">
                         <img src="./img/listening.jpg" alt="" width="50" class="img-icon">
                    </div>
                    <div class="p-2">
                         <p>
                            Tập trung vào phần 1 và 2 ở kỹ năng Listening
                        </p>
                    </div>
                  </div>
                  <div class="d-flex flex-row justify-content-between pt-3">
                    <div class="p-2">
                         <img src="./img/chart.jpg" alt="" width="50" class="img-icon">
                    </div>
                    <div class="p-2">
                         <p>
                            Cách đọc biểu đồ, phân tích để làm tốt writting
                        </p>
                    </div>
                  </div>
                  <div class="d-flex flex-row justify-content-between pt-3">
                    <div class="p-2">
                         <img src="./img/typewriter.jpg" alt="" width="50" class="img-icon">
                    </div>
                    <div class="p-2">
                         <p>
                            Viết báo cáo về cách viết bài tiểu luận
                            Cách trả lời những dạng câu hỏi thông dung ở kỹ năng Reading
                        </p>
                    </div>
                  </div>
                </div>
            </div>
         </div>
         <div class="col-lg-4">
             <div class="card card-deflaut">
                 <div class="card-header" style="background: orange!important;">
                     <div class="card-title" style="width: 100%">
                         Racers &#127943;
                     </div>
                 </div>
                 <div class="card-body">
                     <div class="d-flex hover-select">
                         <h4 style="width:32px">1</h4>
                        <div class="thumbnail-wrapper d48 circular bordered b-white">
                            <img alt="Nguyễn Văn Phúc" class="rounded-circle" src="https://api.adorable.io/avatars/55/Nguyễn Văn Phúc">
                        </div>
                        <p class="ml-2">Nguyễn Văn Phúc</p>
                        <h5 class="ml-auto">2042</h5>
                     </div>
                     <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">2</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Phan Quốc Trung" src="https://api.adorable.io/avatars/55/Phan Quốc Trung" class="rounded-circle">
                       </div>
                       <p class="ml-2">Phan Quốc Trung</p>
                       <h5 class="ml-auto">2039</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">3</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Cao Ngọc Hoàng" src="https://api.adorable.io/avatars/55/Cao Ngọc Hoàng" class="rounded-circle">
                       </div>
                       <p class="ml-2">Cao Ngọc Hoàng</p>
                       <h5 class="ml-auto">1907</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">4</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Lucas Nguyễn" src="https://api.adorable.io/avatars/55/Lucas Nguyễn" class="rounded-circle">
                       </div>
                       <p class="ml-2">Lucas Nguyễn</p>
                       <h5 class="ml-auto">1989</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">5</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Phan Khanh Vuong" src="https://api.adorable.io/avatars/55/Phan Khanh Vuong" class="rounded-circle">
                       </div>
                       <p class="ml-2">Phan Khanh Vuong</p>
                       <h5 class="ml-auto">1895</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">6</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Luan Trung" src="https://api.adorable.io/avatars/55/Luan Trung" class="rounded-circle">
                       </div>
                       <p class="ml-2">Luan Trung</p>
                       <h5 class="ml-auto">1895</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">7</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Nguyen Huynh Cong Minh" src="https://api.adorable.io/avatars/55/Nguyễn Huỳnh Công Minh" class="rounded-circle">
                       </div>
                       <p class="ml-2">Nguyễn Huỳnh Công Minh</p>
                       <h5 class="ml-auto">1889</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">8</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Cao Ngọc Hoàng" src="https://api.adorable.io/avatars/55/Đặng Trung" class="rounded-circle">
                       </div>
                       <p class="ml-2">Đặng Trung</p>
                       <h5 class="ml-auto">1871</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">9</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Cao Ngọc Hoàng" src="https://api.adorable.io/avatars/55/Thảo Quyên" class="rounded-circle">
                       </div>
                       <p class="ml-2">Thảo Quên</p>
                       <h5 class="ml-auto">1865</h5>
                    </div>
                    <div class="d-flex pt-3 hover-select">
                        <h4 style="width:32px">10</h4>
                       <div class="thumbnail-wrapper d48 circular bordered b-white">
                        <img alt="Cao Ngọc Hoàng" src="https://api.adorable.io/avatars/55/Nguyễn Duy" class="rounded-circle">
                       </div>
                       <p class="ml-2">Nguyễn Duy</p>
                       <h5 class="ml-auto">1860</h5>
                    </div>
                 </div>
             </div>
         </div>
         <div class="col-lg-4">
        <div class="card card-deflaut">          
            <div class="card-header" style="background: tomato!important;">
                  <span class="flag">
                    <img alt="bxh" src="https://tienganhmoingay.com/static/LearningPlan/images/new/upload/icon_ranking.png" style="width:70%">
                  </span>
<<<<<<< HEAD
                  <span class="card-title" style="margin-left:46px;">
=======
                  <span class="card-title" style="margin-left:47px;">
>>>>>>> c0790f65b99f90e4008b58dc09c7f2cae1a8ea09
                      Charts
                  </span>
             </div>
             <div class="card-body" style="min-height:465px;">
                <canvas id="myChart" class="charts">
                    
                </canvas>
            </div>
            
         </div>
         <div class="card card-deflaut under-card left-brain-stopped">
                <img src="./img/brain.webp" alt="" height="269" class="image" href="#">
                <div class="overlay" style="font-weight: bold;">Khi não trái ngừng hoạt đông ? 
                    <p style="font-size:15px!important;color: rgb(59, 58, 58)!important;">Trong bài chia sẻ tuần này, Tiếng Anh Mỗi Ngày muốn giới thiệu đến...&#129504; </p>
                </div>
         </div>
    </div>
   
  </section>
  <!-- /.CHARTS -->
  <section class="container" style="margin-top: 5%;" id="course">
    <div style="border-bottom: 2px solid yellow ;"><h5 style="font-family:montserrat; text-align: center;">KHÓA HỌC 
        <span style="font-size:30px;"> &#128175;</span></h5></div>
   <div class="course-content pt-5">
    <div class="row justify-content-md-center practice-skill">
        <div class="col-md-4" data-aos="fade-right" data-aos-duration="1500">
            <div class="card card-deflaut active">
                <div class="img-course">
                    <img src="./img/headphone.jpg" alt="nghe" height="70" class="rounded-circle imgcourse">
                    <span style="font-weight: bold;">NGHE</span>
                </div>
           </div>
        </div>
        <div class="col-md-4" data-aos="fade-left" data-aos-duration="1500">
            <div class="card card-deflaut active">
                <div class="img-course">
                    <img src="./img/talking.jpg" alt="nghe" height="70" class="rounded-circle imgcourse">
                    <span style="font-weight: bold;">NÓI</span>
                </div>
           </div>
        </div>
    </div>
    <div class="row justify-content-md-center  w3-animate-right  practice-skill">
        <div class="col-md-4 pt-3" data-aos="fade-right" data-aos-duration="1500">
            <div class="card card-deflaut active">
                <div class="img-course">
                    <img src="./img/book.jpg" alt="nghe" height="70" class="rounded-circle imgcourse">
                    <span style="font-weight: bold;">ĐỌC</span>
                </div>
           </div>
        </div>
        <div class="col-md-4 pt-3" data-aos="fade-left" data-aos-duration="1500">
            <div class="card card-deflaut active">
                <div class="img-course" >
                    <img src="./img/pencile.jpg" alt="nghe" height="70" class="rounded-circle imgcourse">
                    <span style="font-weight: bold;">VIẾT</span>
                </div>
           </div>
        </div>
    </div>
   </div>
   
  </section>
  <section class="container w3-animate-zoom" style="margin-top: 5%;" id="baigiang">
    <div style="border-bottom: 2px solid #1ab2ff;"><h5 style="font-family:montserrat; text-align: center;">BÀI GIẢNG
        <span style="font-size:30px;"> 	&#128193;</span></h5></div>
    <div class="lesson-tag">
        <h5 style="font-family:montserrat; margin:4%;" class="title-tag">LESSON 1</h5>
        <div class="row">
            <div class="col-md-3 col-sm-6 ">
                <div class="service-box">
                    <div class="service-icon yellow">
                        <div class="front-content">
                            <h3>Từ vựng</h3>
                            <div style="font-size:50px">&#127828;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Từ vựng</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 ">
                <div class="service-box">
                    <div class="service-icon orange">
                        <div class="front-content">
                            <h3>Phát âm</h3>
                            <div style="font-size:50px">&#127829;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Phát âm</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="service-box ">
                    <div class="service-icon red">
                        <div class="front-content">
                            <h3>Ngữ pháp</h3>
                            <div style="font-size:50px">&#127830;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Ngữ pháp</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="service-box">
                    <div class="service-icon grey">
                        <div class="front-content">
                            <h3>Kỹ năng</h3>
                            <div style="font-size:50px">&#127832;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>kỹ năng</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
    </div> 
    </div>   
    <div class="lesson-tag">
        <h5 style="font-family:montserrat; margin:4%; color:#1ab2ff!important;" class="title-tag">LESSON 2</h5>
        <div class="row">
            <div class="col-md-3 col-sm-6 ">
                <div class="service-box">
                    <div class="service-icon yellow">
                        <div class="front-content">
                            <h3>Từ vựng</h3>
                            <div style="font-size:50px">&#127828;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Từ vựng</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 ">
                <div class="service-box">
                    <div class="service-icon orange">
                        <div class="front-content">
                            <h3>Phát âm</h3>
                            <div style="font-size:50px">&#127829;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Phát âm</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="service-box ">
                    <div class="service-icon red">
                        <div class="front-content">
                            <h3>Ngữ pháp</h3>
                            <div style="font-size:50px">&#127830;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Ngữ pháp</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="service-box">
                    <div class="service-icon grey">
                        <div class="front-content">
                            <h3>Kỹ năng</h3>
                            <div style="font-size:50px">&#127832;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>kỹ năng</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
    </div> 
    </div> 
    <div class="lesson-tag">
        <h5 style="font-family:montserrat; margin:4%;color:red!important;" class="title-tag">LESSON 3</h5>
        <div class="row">
            <div class="col-md-3 col-sm-6 ">
                <div class="service-box">
                    <div class="service-icon yellow">
                        <div class="front-content">
                            <h3>Từ vựng</h3>
                            <div style="font-size:50px">&#127828;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Từ vựng</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 ">
                <div class="service-box">
                    <div class="service-icon orange">
                        <div class="front-content">
                            <h3>Phát âm</h3>
                            <div style="font-size:50px">&#127829;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Phát âm</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="service-box ">
                    <div class="service-icon red">
                        <div class="front-content">
                            <h3>Ngữ pháp</h3>
                            <div style="font-size:50px">&#127830;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>Ngữ pháp</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="service-box">
                    <div class="service-icon grey">
                        <div class="front-content">
                            <h3>Kỹ năng</h3>
                            <div style="font-size:50px">&#127832;</div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>kỹ năng</h3>
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                        <button class="btn btn-primary">Xem đi</button>
                    </div>
                </div>
            </div>
    </div> 
    </div> 
 </section>
 
 <section class="container">
     <div class="row row justify-content-lg-center">
        <div class="col-md-6">
            <button  class="btn btn-linkvideo" type="button">XEM THÊM</button>
        </div>
         
     </div>
     
 </section>
 
 <section class="container">
        <img class="open-button" onclick="openForm()" src="./img/chat.webp" width="100">
        <img class="contact-button" src="./img/contact.png" width="130" onclick="contact()">
        <img class="facebook-button" src="./img/facebook.png" width="100" onclick="window.location.href='https://www.facebook.com/tienganhquocte.EFun/'">
        <div class="form-popup" id="myForm">
        <div class="form-container">
            <img src="./img/close.png" alt="" width="50" onclick="closeForm()">
            <div class="d-flex flex-row justify-content-between">
                <div class="p-2 aside-left">
                    <div class="title">CHAT</div>

                    <form id="form-add-conversation" class="form-add-conversation">
                        <div class="input-wrapper">
                            <label for="title"><i class="fa fa-comment" aria-hidden="true"></i></label>
                            <input type="text" name="title" id="title">
                        </div>
                        <div class="message-error" id="title-error"></div>
                        
                        <div class="input-wrapper">
                        <label for="friend-email"><i class="fa fa-envelope" aria-hidden="true"></i></label>
                        <input type="text" name="friendEmail" id="friend-email">
                        </div>
                        <div class="message-error" id="friend-email-error"></div>
                
                        <button class="btn-primary">Add</button>
                    </form>
                
                    <div id="conversations-list" class="conversations-list">
                        <div class="conversation">
                            <p class="conversation-title">Conversation 1</p>
                            <p class="conversation-members">2 members</p>
                        </div>
                    </div>
                
                </div>
                <div class="p-2 chat-container">
                <div class="conversation-detail">
                <div id="current-conversation-members" class="conversation-members"></div>
                </div>
                    <div class="title"><span id="current-conversation-title"></span> </div>

                    <div id="messages-list" class="messages-list"></div>
                
                    <form id="form-add-message" class="form-add-message">
                        <div class="input-wrapper">
                            <input type="text" name="messageContent">
                        </div>
                        <button class="btn-primary">Send</button>
                    </form>
                    
                </div>
            </div>
        </div>
        </div>
    </section>

   <!-- Footer -->
<footer class="page-footer font-small special-color-dark">
    <div class="footer-copyright text-center py-3">
      <blockquote style="font-size:30px; font-style: italic; color:gray !important;">"9.5 IELTS dễ hơn việc cưa đổ crush"</blockquote>
      <p style="font-weight: bold;">Ha Linh Nguyen</p>
      <span>CEO EFUN ENGLISH</span>
    </div>
    <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
              <i class="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
              <i class="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
              <i class="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-copyright text-center py-3">
      <span class="type--fine-print">Made with &nbsp;&nbsp;<span style="font-size: 30px; vertical-align: middle;">⌨️</span>
              &nbsp; and &nbsp;
              <span style="font-size: 30px; vertical-align: middle;">🙌</span>
            </span>
        </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/">EFUN ENGLISH</a>
      </div>
     </footer>
    <!-- Footer -->
`

components.userInformation = `
<!--Navbar -->
 <nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="#"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link back-to-efun" href="#">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
          </li>
            <li class="nav-item">
              <a class="nav-link study-page" href="#">LUYỆN TẬP</a>
            </li>
          <li class="nav-item">
            <a class="nav-link blog-page" href="#">BLOGS</a>
          </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part">
      <li class="user-information"><a class="navbar-avataruser" id="user-profile" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>           
        
           <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
       
      </div>
    </div>
  </nav>
  <!--/.Navbar -->
  <h2 style="margin-top:2%; text-align: center;">CẬP NHẬT THÔNG TIN</h2>
  <section class="container" style="margin-top:3%;">
 
      <h5 class="title-header pt-4"><i class="far fa-user"></i> CÁ NHÂN</h5>
      <div class="row pt-4">
        <div class="col-sm-6">
            <div class="card card-default">
                <div class="card-header">
                    <div class="card-title">Thông tin cá nhân &#128130;</div>
                </div>
        <div class="card-body">
            <img src="./img/phuong.jpg" alt="avatar" class="avatar rounded-circle" id="avatar" height="100">
            <form id="profile-form">
                    <div class="form-group form-group-default">
                        <label>Họ và tên</label>
                        <input name="name" class="form-control" id="name-field" type="text" value="">
                    </div>
                    <div class="message-error" id="name-error"></div>
                    <div class="form-group form-group-default">
                            <label>Email</label>
                            <input name="email" class="form-control" id="email-field" type="text" value="">
                    </div>
                    <div class="message-error" id="email-error"></div>
                    <div class="form-group form-group-default">
                            <label>Số điện thoại</label>
                            <input name="phone" class="form-control" id="phone-number" type="text" value="">
                    </div>
                    <div class="message-error" id="phone-number-error"></div>
                    <div class="form-group form-group-default">
                            <label>Ngày sinh</label>
                            <input name="dob" class="form-control" id="birthday" type="text" value="">
                    </div>
                    <div class="message-error" id="birthday-error"></div>
                    <div class="form-group form-group-default">
                            <label>Thành phố</label>
                            <input name="city" class="form-control" id="city" type="text" value="Hà Nội">
                    </div>
                    <div class="message-error" id="city-error"></div>
                    <button class="btn btn-primary btn-cons" id="submit-btn" type="submit">Lưu</button>
                   
                    <div class="message-error" id="submit-error"></div>
                    <div class="message-success" id="submit-success"></div>
                </form>
            </div>
        </div>
            <div class="card card-default active-user">
                <div class="card-header">
                    <div class="card-title">Đổi mật khẩu &#128273;</div>
                </div>
                <div class="card-body">
                    <form id="change-password-form">
                        <div class="form-group form-group-default">
                            <label>Mật khẩu mới</label>
                            <input name="password" id="input-new-password" class="form-control" type="password" value="">
                        </div>
                        <div class="message-error" id="password-error"></div>
                        <button class="btn btn-primary btn-cons" id="submit-password-btn" type="submit">Đổi</button>
                        <div class="message-success" id="submit-password-success"></div>
                        <div class="message-error" id="submit-password-error"></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card card-deflaut">
                <div class="card-header">
                    <div class="card-title" style="width:100%"><span class="text">Tốc độ học <i class="fas fa-chess-queen" style="color: yellow!important;"></i></span></div>
                </div>
                <div class="card-body">
                    <div class="acount-info">
                        
                                <div class="inner">
                                        Điểm tuần này 
                                        <div class="count-point" id="count-point" style="color: green!important;">0</div>
                                </div>
                                <div class="inner">
                                    Hạng tuần này
                                    <div class="count-point"> > 100</div>
                                </div>
                    </div>
                    <div class="acount-info">
                        
                        <div class="inner">
                                Tổng điểm 
                                <div class="count-point" id="sum-score" style="color: red!important;">0</div>
                        </div>
                        <div class="inner">
                            Xếp hạng
                            <div class="count-point" style="color: orange!important;"> > 100</div>
                        </div>
                     </div>
                </div>
            </div>
            <div class="card card-default active-user">
                <div class="card-header">
                    <div class="card-title">
                        Email của mentor &#128172;
                    </div>
                </div>
                <div class="card-body">
                    <div class="title-email">
                        <h6 style="width:32px">1</h6>
                        <span class="email-mentor">linhnguyenchi227@gmail.com</span>
                        <span><button class="btn-copy">Sao chép</button></span>
                        <span><button class="btn-meet">Meet</button></span>
                    </div>
                    <div class="title-email">
                        <h6 style="width:32px">2</h6>
                        <span class="email-mentor">someone@gmail.com</span>
                        <span><button class="btn-copy">Sao chép</button></span>
                        <span><button class="btn-meet">Meet</button></span>
                    </div>
                    <div class="title-email">
                        <h6 style="width:32px">4</h6>
                        <span class="email-mentor">hihi@gmail.com</span>
                        <span><button class="btn-copy">Sao chép</button></span>
                        <span><button class="btn-meet">Meet</button></span>
                    </div>
                    <div class="title-email">
                        <h6 style="width:32px">5</h6>
                        <span class="email-mentor">thichthiden@gmail.com</span>
                        <span><button class="btn-copy">Sao chép</button></span>
                        <span><button class="btn-meet">Meet</button></span>
                    </div>
                    <div class="title-email">
                        <h6 style="width:32px">2</h6>
                        <span class="email-mentor">someone@gmail.com</span>
                     
                        <span><button class="btn-copy ">Sao chép</button></span>
                        <span><button class="btn-meet">Meet</button></span>
                      
 
                    </div>
                    <button class="btn btn-danger btn-cons" style="margin-top:5%; font-weight: bold;" type="submit">BOOKING</button>
                </div>
                
            </div>
        </div>
      </div>
  </section>
  <section class="container">
        <img class="open-button" onclick="openForm()" src="./img/chat.webp" width="100">
        <img class="contact-button" src="./img/contact.png" width="130" onclick="contact()">
        <img class="facebook-button" src="./img/facebook.png" width="100" onclick="window.location.href='https://www.facebook.com/tienganhquocte.EFun/'">
        <div class="form-popup" id="myForm">
        <div class="form-container">
            <img src="./img/close.png" alt="" width="50" onclick="closeForm()">
            <div class="d-flex flex-row justify-content-between">
                <div class="p-2 aside-left">
                    <div class="title">CHAT</div>

                    <form id="form-add-conversation" class="form-add-conversation">
                        <div class="input-wrapper">
                            <label for="title"><i class="fa fa-comment" aria-hidden="true"></i></label>
                            <input type="text" name="title" id="title">
                        </div>
                        <div class="message-error" id="title-error"></div>
                        
                        <div class="input-wrapper">
                        <label for="friend-email"><i class="fa fa-envelope" aria-hidden="true"></i></label>
                        <input type="text" name="friendEmail" id="friend-email">
                        </div>
                        <div class="message-error" id="friend-email-error"></div>
                
                        <button class="btn-primary">Add</button>
                    </form>
                
                    <div id="conversations-list" class="conversations-list">
                        <div class="conversation">
                            <p class="conversation-title">Conversation 1</p>
                            <p class="conversation-members">2 members</p>
                        </div>
                    </div>
                
                </div>
                <div class="p-2 chat-container">
                <div class="conversation-detail">
                <div id="current-conversation-members" class="conversation-members"></div>
                </div>
                    <div class="title"><span id="current-conversation-title"></span> </div>

                    <div id="messages-list" class="messages-list"></div>
                
                    <form id="form-add-message" class="form-add-message">
                        <div class="input-wrapper">
                            <input type="text" name="messageContent">
                        </div>
                        <button class="btn-primary">Send</button>
                    </form>
                    
                </div>
            </div>
        </div>
        </div>
    </section>
`
components.studyPage = `
    <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="main.html"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link back-to-efun" href="#">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
        </li>

          <li class="nav-item">
            <a class="nav-link study-page" href="#">LUYỆN TẬP</a>
          </li>
        <li class="nav-item">
          <a class="nav-link blog-page" href="#">BLOGS</a>
        </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part">
      <li class="user-information" id="user-page"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
           
        
      <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
       
      </div>
    </div>
  </nav>
  <!--/.Navbar -->
  <section class="container">
  <button class="btn btn-youtube" style="background-color:#1ab2ff;margin-top:3%;">&#127817; Xem các bài giảng</button>
</section>
<section class="container">
  <div class="row pt-4">
    <div class="col-sm-4">
      <div class="card card-default">
        <div class="card-header">
          <div class="card-title text-first" style="width:100%">IELTS TEST 1</div>
        </div>
        <div class="card-body">
          <div class="card-title-body">
            <img src="./img/gif1.gif" alt="gif gif" width="200" class="img-center" onmouseenter="bigImge(this)"
              onmouseleave="normalImge(this)">
            <img src="./img/gif2.gif" alt="gif gif" width="200" class="img-another-center" id="move"
              style="display:none;">
          </div>
          <h5>Bài làm số 1</h5>
          <p>
            Thời gian làm bài: 3 phút
          </p>
          <p style="color:gray!important;">
            Các thầy cô giáo tham gia biên soạn đề thi là những người có trình độ chuyên môn cao, 
            có phương pháp sư phạm bài bản,có hiểu biết sâu sắc về môn học, lĩnh vực mà các thầy 
            cô biên soạn và giảng dạy.
          </p>
          <button class="btn btn-click" id="click-listen-one">Làm bài</button>
        </div>


      </div>
    </div>
    <div class="col-sm-4">
      <div class="card card-default">
        <div class="card-header">
          <div class="card-title text-first" style="width:100%">IELTS TEST 2</div>
        </div>
        <div class="card-body">
          <div class="card-title-body">
            <img src="./img/gif3.gif" alt="gif gif" width="190"height="186" class="img-center" onmouseenter="bigImg(this)"
              onmouseleave="normalImg(this)">
            <img src="./img/gif4.gif" alt="gif gif" width="190" height="186" class="img-another-center" id="move2"
              style="display:none;">
          </div>
          <h5>Bài làm số 2</h5>
          <p>
            Thời gian làm bài: 3 phút
          </p>
          <p style="color:gray!important;">
            Các thầy cô giáo tham gia biên soạn đề thi là những người có trình độ chuyên môn cao, 
            có phương pháp sư phạm bài bản,có hiểu biết sâu sắc về môn học, lĩnh vực mà các thầy 
            cô biên soạn và giảng dạy.
          </p>
          <button class="btn btn-click" id="click-listen-two" >Làm bài</button>
        </div>


      </div>
    </div>
    <div class="col-sm-4">
      <div class="card card-default">
        <div class="card-header">
          <div class="card-title text-first" style="width:100%">IELTS TEST 3</div>
        </div>
        <div class="card-body">
          <div class="card-title-body">
            <img src="./img/gif5.gif" alt="gif gif" width="190" height="185" class="img-center" onmouseenter="bigImgg(this)"
              onmouseleave="normalImgg(this)">
            <img src="./img/gif6.gif" alt="gif gif" width="190" height="185" class="img-another-center" id="move3"
              style="display:none;">
          </div>
          <h5>Bài làm số 3</h5>
          <p>
            Thời gian làm bài: 3 phút
          </p>
          <p style="color:gray!important;">
            Các thầy cô giáo tham gia biên soạn đề thi là những người có trình độ chuyên môn cao, 
            có phương pháp sư phạm bài bản,có hiểu biết sâu sắc về môn học, lĩnh vực mà các thầy 
            cô biên soạn và giảng dạy.
          </p>
          <button class="btn btn-click" id="click-listen-three" >Làm bài</button>
        </div>


      </div>
    </div>
  </div>
</section>
  <section class="container">
  <img class="open-button" onclick="openForm()" src="./img/chat.webp" width="100">
  <img class="contact-button" src="./img/contact.png" width="130" onclick="contact()">
  <img class="facebook-button" src="./img/facebook.png" width="100" onclick="window.location.href='https://www.facebook.com/tienganhquocte.EFun/'">
  <div class="form-popup" id="myForm">
  <div class="form-container">
      <img src="./img/close.png" alt="" width="50" onclick="closeForm()">
      <div class="d-flex flex-row justify-content-between">
          <div class="p-2 aside-left">
              <div class="title">CHAT</div>

              <form id="form-add-conversation" class="form-add-conversation">
                  <div class="input-wrapper">
                      <label for="title"><i class="fa fa-comment" aria-hidden="true"></i></label>
                      <input type="text" name="title" id="title">
                  </div>
                  <div class="message-error" id="title-error"></div>
                  
                  <div class="input-wrapper">
                  <label for="friend-email"><i class="fa fa-envelope" aria-hidden="true"></i></label>
                  <input type="text" name="friendEmail" id="friend-email">
                  </div>
                  <div class="message-error" id="friend-email-error"></div>
          
                  <button class="btn-primary">Add</button>
              </form>
          
              <div id="conversations-list" class="conversations-list">
                  <div class="conversation">
                      <p class="conversation-title">Conversation 1</p>
                      <p class="conversation-members">2 members</p>
                  </div>
              </div>
          
          </div>
          <div class="p-2 chat-container">
          <div class="conversation-detail">
          <div id="current-conversation-members" class="conversation-members"></div>
          </div>
              <div class="title"><span id="current-conversation-title"></span> </div>

              <div id="messages-list" class="messages-list"></div>
          
              <form id="form-add-message" class="form-add-message">
                  <div class="input-wrapper">
                      <input type="text" name="messageContent">
                  </div>
                  <button class="btn-primary">Send</button>
              </form>
          </div>
      </div>
  </div>
  </div>
</section>
`

components.blogs = `
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="main.html"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link back-to-efun" href="#">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
        </li>
          <li class="nav-item">
            <a class="nav-link study-page" href="#" id="study-page">LUYỆN TẬP</a>
          </li>
        <li class="nav-item">
          <a class="nav-link blog-page" href="#" id="blogs-page">BLOGS</a>
        </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part" id="user-div">
        <li class="user-information"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
        
           <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
       
      </div>
    </div>
  </nav>
  <!--/.Navbar -->

        <section class="container" style="margin-top:5%;">  
            <h1 class="text-header">1412 ENGLISH'S BLOGS &#127849;</h1>
       <div class="row justify-content-center content-blog">
           
          <h2 class="text-head pt-4" style="color:tomato !important;">Khi não trái ngừng hoạt động ?</h2>
       <div class="content-all">         
           <p class="text-body">
                    Trong bài chia sẻ tuần này, Tiếng Anh Mỗi Ngày muốn giới thiệu đến bạn một Ted video của tác giả Jill Taylor.
                    Đây là một video chia sẻ về trải nghiệm của tác giả, một nhà khoa học nghiên cứu về não bộ, khi bị đột quỵ (stroke).&nbsp;
                </p>
                <p>
                    <img alt="" style="display: block; width: 620px; max-width: 100%; margin: 30px auto; text-align: center;" src="./img/brain.webp">
                </p>
               <p>
                   Trải nghiệm đó lần đâu tiên cho tác giả tự mình cảm nhận được vận hành của bộ não và các tế bào ngay trên bản thân mình. 
                Và trải nghiệm này cũng tình cờ giúp tác giả nhận ra một bài học rất thú vị:  
                <em>
                về cách để giúp chúng ta có thể sống một cách hòa bình và kết nối hơn với thế giới xung quanh.
               </em>
               </p> 
           </div>

              
       </div>
       <div class="row justify-content-center content-blog">
        <h2 class="text-head pt-4" style="color:tomato !important;">Cách học IELTS hiệu quả</h2>
        <div class="content-all">         
            <div class="text-body">
                <h5>
                    I. Tìm hiểu kỹ về IELTS
                </h5> 
            </div>
                <p>
                    Trước khi bắt đầu một cái gì, hãy tìm hiểu kỹ về nó. Các bạn cần tìm hiểu những thông tin liên quan đến kỳ thi từ cấu trúc bài thi, thang điểm… 
                    để chắc chắn mình biết được IELTS là gì mà theo đuổi nhé! Nếu đã tìm hiểu kỹ về IELTS rồi thì các bạn có thể bỏ qua nha.
                </p> 
                <p>
                    IELTS là kỳ thi đánh giá năng lực sử dụng tiếng Anh được tổ chức bởi Hội Đồng Anh (BC), tổ chức giáo dục quốc tế IDP, 
                    Cambridge Assessment English. IELTS có cấu trúc là 4 phần thi, tổng thời gian gần 3 tiếng. 
                    4 bài thi là Listening (4 sections), Reading ( 3 paragraphs), Writing (2 tasks) và Speaking ( 3 parts).
                </p>
                <div class="text-body">
                <h5>
                    II. Thi thử trước để xác định trình độ
                    
                </h5> 
                    
                </div>
                <p>
                    Một điều mà chắc chắn bạn phải làm là nên thi thử trước để biết được trình độ của mình ở đâu.
                     Thi thử cũng giúp bạn làm quen với format đề thi để từ đó dễ dàng hơn cho việc học tập về sau. 
                     Bạn có thể thi thử online trên các trang trực tuyến như: </p>

                <p> 1. IELTSonlinetests (<a>http://ieltsonlinetests.com/</a>) </p>

                <p> 2. IELTS Exam (<a>https://www.ielts-exam.net/</a>) </p>

                 <p>3. IELTSbuddy (<a>http://www.ieltsbuddy.com/</a>)</p>

                 <p>4. IELTSforfree (<a>https://ieltsforfree.com/</a>)</p>
                 <p>
                     <img src="./img/ielts.png" alt="" style="display: block; width: 720px; max-width: 100%; margin: 30px auto; text-align: center;">
                 </p>
                 <div class="text-body">
                    <h5>
                        III. Xác định mục tiêu và lập kế hoạch luyện thi IELTS
                        
                    </h5> 
                        <p>
                            Bạn phải chắc chắn xác định một điều, mục tiêu bạn hướng đến là gì?  Sau khi thi thử, bạn đang ở trình độ nào và muốn hướng tới bao nhiêu?
                             Điều này sẽ giúp bạn lập kế hoạch phù hợp hơn. Với những ai điểm IELTS còn kém,
                             muốn đạt được mức điểm cao như người khác thì phải nỗ lực hơn nhiều. Quan trọng của tự học chính là học chăm chỉ đấy.
                        </p>
                        <p>
                            - Thời gian dành để ôn thi mỗi ngày, cụ thể hơn là dành cho mỗi kỹ năng. Khi đã đặt ra thời gian thì bạn cần thực hiện đầy đủ, 
                            nếu hôm nay không học thì ngày mai phải học bù. Mỗi người một thời gian biểu do đó phải cố gắng để sắp xếp thời gian cho ôn luyện phù hợp.
                        </p>
                        <p>
                            - Chuẩn bị sổ và bút cho công cuộc học tập phía trước.
                        </p>
                        <p>
                            - Các cuốn sách học theo giai đoạn của bản thân. Nếu điểm đang thấp thì các bạn cần chọn loại sách phù hợp, 
                            sách cơ bản chứ không học theo tràn lan các tài liệu nhé. 
                            Khi đã có nền tảng khá hơn thì bạn sẽ dễ tham khảo và quyết định chọn tài liệu hợp cho mình hơn nha.
                        </p>
                        <p>
                            - Tìm kiếm các kênh học tập phù hợp với bản thân. Phổ biến nhất là kênh Youtube hoặc các kênh tự học IELTS online. 
                            Những kênh nước ngoài như IELTS Simon, IELTS Advantace là những kênh nên theo dõi. Nếu chưa hiểu hết các bài học bằng tiếng Anh,
                             các bạn có thể tham khảo những bài dạy online từ IELTS Fighter dành cho người mới bắt đầu từ 0 - 5.0 và từ 5.0 - 6.5 nhé! 
                        </p>
                    </div>
            </div>
       </div>
        </section>
        <section class="container">
            <img class="open-button" onclick="openForm()" src="./img/chat.webp" width="100">
            <img class="contact-button" src="./img/contact.png" width="130" onclick="contact()">
            <img class="facebook-button" src="./img/facebook.png" width="100" onclick="window.location.href='https://www.facebook.com/tienganhquocte.EFun/'">
            <div class="form-popup" id="myForm">
            <div class="form-container">
                <img src="./img/close.png" alt="" width="50" onclick="closeForm()">
                <div class="d-flex flex-row justify-content-between">
                    <div class="p-2 aside-left">
                        <div class="title">CHAT</div>
    
                        <form id="form-add-conversation" class="form-add-conversation">
                            <div class="input-wrapper">
                                <label for="title"><i class="fa fa-comment" aria-hidden="true"></i></label>
                                <input type="text" name="title" id="title">
                            </div>
                            <div class="message-error" id="title-error"></div>
                            
                            <div class="input-wrapper">
                            <label for="friend-email"><i class="fa fa-envelope" aria-hidden="true"></i></label>
                            <input type="text" name="friendEmail" id="friend-email">
                            </div>
                            <div class="message-error" id="friend-email-error"></div>
                    
                            <button class="btn-primary">Add</button>
                        </form>
                    
                        <div id="conversations-list" class="conversations-list">
                            <div class="conversation">
                                <p class="conversation-title">Conversation 1</p>
                                <p class="conversation-members">2 members</p>
                            </div>
                        </div>
                    
                    </div>
                    <div class="p-2 chat-container">
                    <div class="conversation-detail">
                    <div id="current-conversation-members" class="conversation-members"></div>
                    </div>
                        <div class="title"><span id="current-conversation-title"></span> </div>
    
                        <div id="messages-list" class="messages-list"></div>
                    
                        <form id="form-add-message" class="form-add-message">
                            <div class="input-wrapper">
                                <input type="text" name="messageContent">
                            </div>
                            <button class="btn-primary">Send</button>
                        </form>
                        
                    </div>
                </div>
            </div>
            </div>
        </section>
    
       <!-- Footer -->
    <footer class="page-footer font-small special-color-dark">
        <div class="footer-copyright text-center py-3">
          <blockquote style="font-size:30px; font-style: italic; color:gray !important;">"Ngừng học khi ngừng thở"</blockquote>
          <p style="font-weight: bold;">Ha Linh Nguyen</p>
          <span>CEO EFUN ENGLISH</span>
        </div>
        <div class="container">
            <ul class="list-unstyled list-inline text-center">
              <li class="list-inline-item">
                <a class="btn-floating btn-fb mx-1">
                  <i class="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-1">
                  <i class="fab fa-twitter"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-1">
                  <i class="fab fa-google-plus-g"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-li mx-1">
                  <i class="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-dribbble mx-1">
                  <i class="fab fa-dribbble"> </i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-copyright text-center py-3">
          <span class="type--fine-print">Made with &nbsp;&nbsp;<span style="font-size: 30px; vertical-align: middle;">⌨️</span>
                  &nbsp; and &nbsp;
                  <span style="font-size: 30px; vertical-align: middle;">🙌</span>
                </span>
            </div>
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/">EFUN ENGLISH</a>
          </div>
         </footer>
        <!-- Footer -->
`

components.forgotPassword = `
<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="./img/unnamed.gif" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper click-on-logo">
                <img src="./img/logoefun.png" alt="logo" class="logo">
              </div>
              <p class="login-card-description">QUÊN MẬT KHẨU &#128542;</p>
              <form action="#!" id="forgot-password-form">
                  <div class="form-group mb-4">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="register-email" class="form-control" placeholder="Email">
                  </div>
                  <button name="reset" id="reset-password-btn" class="btn btn-block login-btn mb-4">Xác nhận</button>
                  <div class="message-success" id="reset-password-success"></div>
                  <div class="message-error" id="reset-password-error"></div>
                  <div class="message-error" id="email-error"></div>
                </form>
                </nav>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </main>
`
components.stN1 = `
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="main.html"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link back-to-efun" href="#">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
        </li>

          <li class="nav-item">
            <a class="nav-link study-page" href="#">LUYỆN TẬP</a>
          </li>
        <li class="nav-item">
          <a class="nav-link blog-page" href="#">BLOGS</a>
        </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part">
      <li class="user-information" id="user-page"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
           
        
      <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
       
      </div>
    </div>
  </nav>
  <!-- /.Navbar --> 
<div class="container game-container">
        <div id="game">
            <div id="hud" class="d-flex flex-row justify-content-between">
                <div class="p-2" id="hud-item">
                    <p id="progressText" class="hud-prefix">
                        Question
                    </p>
                 <div id="progressBar">
                     <div id="progressBarFull"></div>
                 </div>
                </div>
                <div class="p-2"  id="hud-item">
                    <p class="hud-prefix">
                        Time
                    </p>
                    <h1 class="hud-main-text" id="time">
                        <div><span id="time"></span></div>
                    </h1>
                </div>
                <div class="p-2"  id="hud-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score">
                        0
                    </h1>
                </div>
            </div>
            <audio controls>
                <source src="" type="audio/ogg">
              </audio>
            <h2 id="question"></h2>
            <div class="question-body"> 
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">A</p>
                    <p class="p-2 choice-text" data-number="1">Choice 1</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">B</p>
                    <p class="p-2 choice-text" data-number="2">Choice 2</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">C</p>
                    <p class="p-2 choice-text" data-number="3">Choice 3</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">D</p>
                    <p class="p-2 choice-text" data-number="4">Choice 4</p>
                </div>
            </div>

            
        </div>
    </div>
`
components.stN2 = `
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="main.html"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link back-to-efun" href="#">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
        </li>

          <li class="nav-item">
            <a class="nav-link study-page" href="#">LUYỆN TẬP</a>
          </li>
        <li class="nav-item">
          <a class="nav-link blog-page" href="#">BLOGS</a>
        </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part">
      <li class="user-information" id="user-page"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
           
        
      <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
       
      </div>
    </div>
  </nav>
  <!-- /.Navbar --> 
<div class="container game-container">
        <div id="game">
            <div id="hud" class="d-flex flex-row justify-content-between">
                <div class="p-2" id="hud-item">
                    <p id="progressText" class="hud-prefix">
                        Question
                    </p>
                 <div id="progressBar">
                     <div id="progressBarFull"></div>
                 </div>
                </div>
                <div class="p-2"  id="hud-item">
                    <p class="hud-prefix">
                        Time
                    </p>
                    <h1 class="hud-main-text" id="time">
                        <div><span id="time"></span></div>
                    </h1>
                </div>
                <div class="p-2"  id="hud-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score">
                        0
                    </h1>
                </div>
            </div>
            <audio controls>
                <source src="" type="audio/ogg">
              </audio>
            <h2 id="question"></h2>
            <div class="question-body"> 
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">A</p>
                    <p class="p-2 choice-text" data-number="1">Choice 1</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">B</p>
                    <p class="p-2 choice-text" data-number="2">Choice 2</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">C</p>
                    <p class="p-2 choice-text" data-number="3">Choice 3</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">D</p>
                    <p class="p-2 choice-text" data-number="4">Choice 4</p>
                </div>
            </div>

            
        </div>
    </div>
`
components.stN3 = `
<!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
    <a class="navbar-brand back-to-home-page" href="main.html"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link back-to-efun" href="#">1412 HOUSE<i class="fas fa-star" style="color:red !important;"></i></a>
        </li>

          <li class="nav-item">
            <a class="nav-link study-page" href="#">LUYỆN TẬP</a>
          </li>
        <li class="nav-item">
          <a class="nav-link blog-page" href="#">BLOGS</a>
        </li>
      </ul>
      <div class="navbar-nav ml-auto nav-flex-icons user-part">
      <li class="user-information" id="user-page"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
           
        
      <button type="button" class="btn-logout" name="logout" id="btn-logout">Đăng xuất</button>
       
      </div>
    </div>
  </nav>
  <!-- /.Navbar --> 
<div class="container game-container">
        <div id="game">
            <div id="hud" class="d-flex flex-row justify-content-between">
                <div class="p-2" id="hud-item">
                    <p id="progressText" class="hud-prefix">
                        Question
                    </p>
                 <div id="progressBar">
                     <div id="progressBarFull"></div>
                 </div>
                </div>
                <div class="p-2"  id="hud-item">
                    <p class="hud-prefix">
                        Time
                    </p>
                    <h1 class="hud-main-text" id="time">
                        <div><span id="time"></span></div>
                    </h1>
                </div>
                <div class="p-2"  id="hud-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score">
                        0
                    </h1>
                </div>
            </div>
            <audio controls>
                <source src="" type="audio/ogg">
              </audio>
            <h2 id="question"></h2>
            <div class="question-body"> 
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">A</p>
                    <p class="p-2 choice-text" data-number="1">Choice 1</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">B</p>
                    <p class="p-2 choice-text" data-number="2">Choice 2</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">C</p>
                    <p class="p-2 choice-text" data-number="3">Choice 3</p>
                </div>
                <div class="choice-container d-flex flex-row">
                    <p class="p-2 choice-prefix">D</p>
                    <p class="p-2 choice-text" data-number="4">Choice 4</p>
                </div>
            </div>

            
        </div>
    </div>
`
