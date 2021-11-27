function setRadioBtnCheck() {

  if (!localStorage.hasOwnProperty('idOfCheckedRadioBtn')) {

    localStorage.setItem('idOfCheckedRadioBtn', null);
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    };
    return;
  };
 
  for (let i = 0; i < radioButtons.length; i++) {
    if ( radioButtons[i].id == localStorage.idOfCheckedRadioBtn ) {
      radioButtons[i].checked = true;
      break;
    };
  };
};

setRadioBtnCheck();


function setValue(htmlElement, localStorageKey) {

  if (!localStorage.hasOwnProperty(localStorageKey)) {
    localStorage.setItem(localStorageKey, 0);
    htmlElement.value = 0;
    return;
  };

  htmlElement.value = localStorage[localStorageKey];
}

setValue(bs18Input, 'bs18Input_value');
setValue(sen65Input, 'sen65Input_value');



function setInner_HTML(htmlElement, localStorageKey) {

  if (!localStorage.hasOwnProperty(localStorageKey)) {
    localStorage.setItem(localStorageKey, 0);
    htmlElement.innerHTML=`Total €${localStorage[localStorageKey]}`;
    return;
  };

  htmlElement.innerHTML=`Total €${localStorage[localStorageKey]}`;
};

setInner_HTML(totalSumParagraph, 'totalSum_value');