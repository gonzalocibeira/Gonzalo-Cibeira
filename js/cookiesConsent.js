cookie_banner = document.querySelector("#cookieCons")
ok_btn = document.querySelector("#cookieOk")

function consentOn () {
    gtag('consent', 'update', {
        'ad_storage' : 'allowed',
        'analytics_storage' : 'allowed',
      });

      console.log(window.dataLayer)

};







ok_btn.addEventListener("click", consentOn)