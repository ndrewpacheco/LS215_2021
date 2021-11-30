function mailCount(emailData) {
  let emails = emailData.split(/##\|\|##/);
  let emailCount = emails.length;
  // console.log(emailCount);
  return emailCount;
}


mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

