export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve({
    loginResult: {
      jwtString: 'fdafdasdfafda',
    }
  }), 2000);
});
