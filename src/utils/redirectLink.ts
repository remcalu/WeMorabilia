/* The function redirects the current window to the endpoint passed in */
function redirectLink(link: any) {
  try {
    window.location.replace(link);
  } catch (error) {
    console.log('error redirecting: ', error);
  }
}

export default redirectLink;
