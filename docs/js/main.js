(function(){
  'use strict';

  function hideAndShow(hide, show) {
    UIkit.alert(hide).close();
    setTimeout(() => {
      show.hidden = false
    }, 300);
  }

  function run(func) {
    const alrtInit = document.getElementById('alrt-init');
    const alrtPending = document.getElementById('alrt-pending');
    const alrtOk = document.getElementById('alrt-ok');
    const alrtKo = document.getElementById('alrt-ko');

    const btn = document.getElementById('btn-run');
    btn.addEventListener('click', () => {
      btn.disabled = true;
      hideAndShow(alrtInit, alrtPending);

      try {
        func((response) => {
          console.log(response);
          hideAndShow(alrtPending, alrtOk);
        });
      }
      catch (err) {
        console.error(err);
        hideAndShow(alrtPending, alrtKo);
      }
    });
  }

  window.settingCodeSnippet = Object.freeze({ run });
})();