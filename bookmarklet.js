javascript: (function () {
    document.querySelector('#addHybridInfo').style.display = 'none';
    document.querySelector('#header').style.display = 'none';

    document.querySelector('#btnNoNav').style.display = 'none';
    document.querySelector('#btnContMax').style.display = 'none';
    document.querySelector('#usercontext-bar').style.display = 'none';
    document.querySelector('#nav-main').style.width = '50px';
    document.body.style.backgroundImage = 'none';
    document.querySelector('#nav-main h2').style.display = 'none';
    document.querySelector('#nav-main iframe').style.display = 'none';
    document.querySelector('#nav-main').style.backgroundColor = '#00427C';
    document.querySelector('#nav-main').style.color = '#FFF';
    document.querySelector('#nav-main').style.display = 'flex';
    document.querySelector('#nav-main').style.justifyContent = 'center';
    document.querySelector('#cust-leftnav-footer').style.display = 'none';
    document.querySelector('#nav-main').style.padding = '25px 25px';
    document.querySelector('#content-main').style.width = 'calc(100% - 100px)';
    document.querySelector('#content-main').style.boxSizing = 'border-box';
    document.querySelector('#content-main').style.padding = '25px';
    document.querySelector('#content-main').style.marginLeft = '100px';
    document.querySelector('#nav-main').style.boxShadow = '-4px 6px 60px 6px #00000080';
    document.querySelector('#nav-main').style.position = 'fixed';
    document.querySelector('#nav-main').style.top = 0;
    document.querySelector('#nav-main').style.left = 0;
    document.querySelector('#nav-main').style.height = '100vh';

    const branding = document.createElement("a");
    branding.style.backgroundImage = 'url("../images/img/powerschool.svg")';
    branding.style.backgroundRepeat = 'no-repeat';
    branding.style.backgroundSize = 'auto 50px';
    branding.style.backgroundPosition = '5px 0';
    branding.href = "/guardian/home.html";
    branding.id = "branding";
    branding.style.textDecoration = "none";
    branding.style.verticalAlign = "middle";
    branding.style.width = '50px';
    branding.style.height = '50px';
    branding.style.padding = 0;
    branding.style.paddingBottom = "20px";
    document.querySelector('#nav-main ul').prepend(branding);

    Array.from(document.querySelectorAll('.psparent #nav-main a:not(#branding)')).map((e) => {
        e.innerText = '';
        e.style.paddingInlineEnd = '0';
        if (e.parentElement.classList.contains('selected')) {
            e.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        };
        e.parentElement.style.width = '50px';
        e.parentElement.style.height = '50px';
        e.style.width = '50px';
        e.style.height = '50px';
        e.parentElement.style.borderRadius = '8px';
        e.style.padding = 0;
        e.parentElement.style.backgroundPosition = 'center center';
        e.parentElement.style.marginBottom = '12px';
        e.parentElement.style.backgroundSize = 'auto 24px';
    });

    const style = document.createElement('style');
    style.innerHTML = `#nav-main li.selected::before {
        content: none;
    }
    
    #nav-main li:hover:not(.selected):not(#branding) {
        background-color: rgba(255, 255, 255, 0.025) !important;
    }
    `;
    document.head.append(style);
})();
