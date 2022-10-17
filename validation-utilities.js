function numeralsOnly(e) {
  var r = (e = e || event).charCode
    ? e.charCode
    : e.keyCode
    ? e.keyCode
    : e.which
    ? e.which
    : 0;
  return (
    !(r > 31 && (r < 48 || r > 57) && 46 != r) ||
    (alert("Enter Digit only in this field!"), !1)
  );
}

function isInteger(e) {
  var r;
  for (r = 0; r < e.length; r++) {
    var t = e.charAt(r);
    if (t < "0" || t > "9") return !1;
  }
  return !0;
}

function IsNumb_decimal(e) {
  if (((mystring = e.value), mystring.match(/^\d+$|^\d+\.\d{2}$/))) return !0;
  alert("Enter Digit ");
}

function isEmail(e) {
  if (((theValue = e.value), e.focus(), "" != theValue)) {
    var r,
      t = "";
    theValue = trim(theValue);
    var a = theValue.length;
    if (-1 == theValue.indexOf("@", 0))
      return alert("Email must contain @ "), !1;
    if (
      "@" == theValue.charAt(0) ||
      "@" == theValue.charAt(a) ||
      "@" == theValue.charAt(a - 1)
    )
      return alert("@ not allowed at start or end of email"), !1;
    if (
      "." == theValue.charAt(0) ||
      "." == theValue.charAt(a) ||
      "." == theValue.charAt(a - 1)
    )
      return alert("Dot(.) not allowed at start or end of email"), !1;
    if (
      ((r = theValue.indexOf("@", 0)),
      (dotat = theValue.indexOf(".", 0)),
      "." == theValue.charAt(dotat + 1) || "@" == theValue.charAt(dotat + 1))
    )
      return (
        alert(
          "Dot and @ are not allowed immediately following the dot in email"
        ),
        !1
      );
    if ("." == theValue.charAt(r + 1) || "@" == theValue.charAt(r + 1))
      return (
        alert("Dot and @ are not allowed immediately following the @ in email"),
        !1
      );
    if (-1 != theValue.indexOf("@", r + 1))
      return alert("Multiple @ are not allowed in email "), !1;
    if (-1 != theValue.indexOf(" ", 0))
      return alert("Blank spaces are not allowed in email"), !1;
    for (k = 0; k < a; ++k) {
      if ("@" == (t = theValue.substring(k, k + 1))) {
        if ("@" == theValue.substring(k, a)) return !1;
        if (-1 == theValue.indexOf(".", k))
          return alert("Invalid Email Id"), !1;
      }
      if ("." == t && "." == theValue.substring(k + 1, k + 2))
        return alert("Consecutive dots are not allowed in email"), k, !1;
      if (
        !(
          (t >= "a" && t <= "z") ||
          (t >= "A" && t <= "Z") ||
          (t >= "0" && t <= "9") ||
          "@" == t ||
          "." == t ||
          "_" == t ||
          "-" == t
        )
      )
        return alert("No special characters allowed except @, dot(.)"), !1;
    }
    for (var n = theValue.indexOf(".", r); n <= a; ++n)
      if (theValue.charAt(n) >= "0" && theValue.charAt(n) <= "9")
        return alert("Invalid domain name  "), !1;
  }
  return !0;
}

function maxLen(e, r, t) {
  if (parseInt(e.value.length) > parseInt(r))
    return alert(t + "\n [Current length is " + e.value.length), !1;
}

function req(objValue, strError) {
  return (
    0 != eval(objValue.value.length) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + " : Required Field"),
    objValue.focus(),
    alert(strError),
    (strError = ""),
    !1)
  );
}


function isValidURL(e) {
  return !!/^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/.test(
    e
  );
}

function chkAlphaNum(objValue, strError) {
  var charpos = objValue.value.search("[^A-Za-z0-9' ']");
  if (objValue.value.length > 0 && charpos >= 0)
    return (
      (strError && 0 != strError.length) ||
        (strError = objValue.name + ": Only alpha-numeric characters allowed "),
      alert(
        strError + "\n [Error character position " + eval(charpos + 1) + "]"
      ),
      (strError = ""),
      objValue.focus(),
      !1
    );
}

function chkMinLen(objValue, cmdvalue, strError) {
  return (
    !(eval(objValue.value.length) < eval(cmdvalue)) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + " : " + cmdvalue + " characters minimum  "),
    alert(strError + "\n[Current length = " + objValue.value.length + " ]"),
    objValue.focus(),
    (strError = ""),
    !1)
  );
}

function chkMaxLen(objValue, cmdvalue, strError) {
  return (
    !(eval(objValue.value.length) > eval(cmdvalue)) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + " : " + cmdvalue + " characters minimum  "),
    alert(strError + "\n[Current length = " + objValue.value.length + " ]"),
    objValue.focus(),
    (strError = ""),
    !1)
  );
}

function chkDesc(objValue, strError) {
  var charpos = objValue.value.search("[^A-Za-z0-9-_\\/ ]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ":characters allowed are 0-9,- and ,"),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    objValue.focus(),
    !1)
  );
}

function chkDesc1(objValue, strError) {
  var charpos = objValue.value.search("[^0-9., ]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": characters allowed are 0-9,- and,"),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    objValue.focus(),
    !1)
  );
}

function chkNum(objValue, strError) {
  var charpos = objValue.value.search("[^0-9]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only digits allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

function chkNumeric(objValue, strError) {
  var charpos = objValue.value.search("[^0-9 . 0-9]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only digits allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

function chkNum1(objValue, strError) {
  var charpos = objValue.value.search("[^0-9 -]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only digits allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

function chkAlpha(objValue, strError) {
  var charpos = objValue.value.search("[^A-Za-z' '/&]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only Charecter allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

    function persent(e, r) {
      return !(e.value > 100) || (alert(r), e.focus(), !1);
    }

    function chkPassMatch(e, r, t) {
      return e.value == r.value || (alert(t), e.focus(), (t = ""), !1);
    }

    function SetDec(objvalue, str, places) {
      var ValidChars = "0123456789.",
        IsNumber = !0,
        Char;
      for (i = 0; i < str.length && 1 == IsNumber; i++)
        if (((Char = str.charAt(i)), -1 == ValidChars.indexOf(Char)))
          return (
            (IsNumber = !1),
            alert("Percentage should be Numeric"),
            objvalue.focus(),
            !1
          );
      return str > 100 || str < 0
        ? (alert("Percentage should be less than 100 and not be negative "),
          objvalue.focus(),
          !1)
        : (-1 != str.indexOf(".") &&
            (str =
              places > 0
                ? str.substring(
                    0,
                    eval(str.indexOf(".")) + eval(places) + eval(1)
                  )
                : str.substring(0, str.indexOf("."))),
          alert("only two decimal places are allowed"),
          objvalue.focus(),
          !1);
    }
