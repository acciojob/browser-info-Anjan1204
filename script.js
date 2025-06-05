function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let version = navigator.appVersion;

  // Browser name detection logic
  if (userAgent.includes("Chrome") && !userAgent.includes("Edge") && !userAgent.includes("OPR")) {
    browserName = "Google Chrome";
    version = userAgent.match(/Chrome\/([\d.]+)/)[1];
  } else if (userAgent.includes("Firefox")) {
    browserName = "Mozilla Firefox";
    version = userAgent.match(/Firefox\/([\d.]+)/)[1];
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browserName = "Safari";
    version = userAgent.match(/Version\/([\d.]+)/)[1];
  } else if (userAgent.includes("Edg")) {
    browserName = "Microsoft Edge";
    version = userAgent.match(/Edg\/([\d.]+)/)[1];
  } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    browserName = "Opera";
    version = userAgent.match(/(Opera|OPR)\/([\d.]+)/)[2];
  }

  document.getElementById("browser-info").textContent =
    "You are using " + browserName + " version " + version;
}

getBrowserInfo();
