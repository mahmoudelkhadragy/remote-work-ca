convert.$(`head`).append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
#find-exchange {
  height: inherit;
  padding-top: 12px;
}

#find-exchange h2.map-title {
  display: none;
}

#find-exchange form .form-group label {
  display: none;
}

.con_bw_header {
  width: 95%;
  margin: 38px auto;
  background-color: rgba(37, 121, 198, 0.6);
  padding: 41px 0;
}
#find-exchange .con_row {
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
}
#find-exchange .con_row_sub {
  display: flex;
  align-items: center;
}
#find-exchange .con_bw_img {
  padding-right: 10px;
}
#find-exchange .con_bw_img img {
  width: 100%;
  min-width: 90px;
  max-width: 95px;
}
.con_first_content {
  margin: auto;
}
.con_first_content p {
  font-size: 20px;
  margin: 0;
  color: #fff;
  padding-top: 15px;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
}
.con_bw_title h2 {
  font-size: 45px;
  color: #fff;
  margin: 0;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
}
#find-exchange .con_first {
  width: 60%;
}
#find-exchange .con_second {
  width: 35%;
}

.con_second > h2 {
  font-size: 28px;
  text-align: center;
  margin: 0 !important;
  color: #fff;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  padding-bottom: 8px;
}
.con_second form > h2.map-title {
  display: block !important;
  font-size: 28px;
  margin: 0 !important;
  padding: 7px 0 !important;
  font-weight: 400;
}
.con_second form .form-group {
  width: 100%;
  margin: 0 !important;
}

#find-exchange form .select2-container {
  width: 100% !important;
  max-width: 350px !important;
}
@media (max-width: 500px) {
  #find-exchange form .select2-container {
    max-width: 250px !important;
  }
  .con_bw_title h2 {
    font-size: 28px !important;
  }
  #find-exchange .con_bw_img img {
    min-width: 50px;
  }
  #find-exchange {
    padding-left: 8px;
    padding-left: 8px;
  }
}
@media (max-width: 767.98px) {
  #find-exchange .con_row {
    flex-direction: column;
    width: 100%;
  }
  #find-exchange .con_first {
    width: 100%;
    padding: 0 20px;
  }
  #find-exchange .con_second {
    width: 100%;
    margin-top: 30px;
  }
  .con_bw_title h2 {
    font-size: 35px;
  }
  #find-exchange .con_bw_img img {
    min-width: 65px;
  }
  .con_first_content p {
    font-size: 18px;
  }
  .con_second > h2,
  .con_second form > h2.map-title {
    font-size: 25px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .con_first_content p {
    font-size: 18px;
  }
  .con_bw_title h2 {
    font-size: 30px;
  }
  .con_second > h2,
  .con_second form > h2.map-title {
    font-size: 25px;
  }
  #find-exchange .con_bw_img img {
    min-width: 65px;
  }
}


</style>
`)



convert.$(document).ready(function () {
  setTimeout(() => {
    convert.$(`#find-exchange`).append(`
    <div class="con_bw_header">
      <div class="con_row">
        <div class="con_first">
          <div class="con_first_content">
            <div class="con_row_sub">
              <div class="con_bw_img">
                <img src="https://i.ibb.co/zft6nKz/bw-1.png" alt="BWW logo" />
              </div>
              <div class="con_bw_title">
                <h2>The Best Way to Start Trading Bitcoin</h2>
              </div>
            </div>
            <p>
              Dive into crypto and find an exchange to trade on today. Now buying,
              selling, and trading Bitcoin is easier than ever.
            </p>
          </div>
        </div>
        <div class="con_second">
          <h2>Buy Bitcoin or Crypto in:</h2>
        </div>
      </div>
    </div>
    `);
    convert.$(`.con_second`).append(convert.$(`#find-exchange form`));
  }, 200);
});

